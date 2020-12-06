import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Panel} from "react-bootstrap";
import Link from 'next/link';

class SituShow extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass: '',
			message: 'あなたの店舗情報',
			signup: false,
			email: '',
			uid: '',
			login: true,
			data: []
		}
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePass = this.onChangePass.bind(this);
	}

	async componentDidMount() {
		var today, tmp, day;
		today = new Date();
		if (today.getDate() < 10) {
			day = '0' + String(today.getDate());
		} else {
			day = String(today.getDate());
		}
		tmp = String(today.getFullYear()) + String(today.getMonth()+1) + String(day);
		await auth.onAuthStateChanged(async(user) => {
			if (user) {
				console.log(user.uid);
				this.setState({uid: user.uid, login: true});
			} else {
				this.setState({login: false});
			}
			try {
				let db = firestore;
				const snapShot = await db.collection('user').doc(user.uid).collection('date').doc(tmp).get();
				//const snapShot = await db.collection('body_temperature').doc(user.uid).collection("date").get();
				const data = [];
				snapShot.docs.forEach(doc => {
					data.push(doc.data());
					console.log(this.state.data);
					}
				});
				this.setState({
					data: data
				});
			}
			catch (e) {
				console.log('データ取得失敗', e);
			}
			console.log(user.data);
		});
	}

	onChangeEmail(e) {
		this.setState({email:e.target.value});
	}

	onChangePass(e) {
		this.setState({pass:e.target.value});
	}

	getTableData = () => {
		console.log(this.state.data);
		let result = [];
		if (this.state.data == null || this.state.data.length == 0) {
			return [<tr key="0"><th>NO DATA.</th></tr>];
		}
		for (let i in this.state.data) {
			result.push(<tr key={i}>
				<th>{this.state.data[i]}</th>
			</tr>);
		}
		result.push(<div>this.state.data</div>);
		return result;
	}

	render() {
		if (this.state.login) {
			return (
				<div>
					<p>{this.state.message}</p>
					{this.getTableData}
					<Link href="/"><button>ホームへ</button></Link>
				</div>
			)
		} else {
			return (
				<div>
					<p>ログインしてください</p>
					<Link href="/"><button>ホームへ</button></Link>
				</div>
			)
		}
	}
}

SituShow = connect((state)=> state) (SituShow);
export default SituShow;
