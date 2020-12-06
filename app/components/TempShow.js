import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Panel} from "react-bootstrap";
import Link from 'next/link';

class TempShow extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass: '',
			message: 'あなたの体温情報',
			signup: false,
			email: '',
			uid: '',
			login: true,
			data: [],
			cocoa: 0,
			temp: 0,
			v: 0
		}
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePass = this.onChangePass.bind(this);
	}

	async componentDidMount() {
		var x;
		await auth.onAuthStateChanged(async (user) => {
			if (user) {
				console.log(user.uid);
				this.setState({uid: user.uid, login: true});
				x = user.uid;
			} else {
				this.setState({login: false});
			}
		var today, tmp, day;
		today = new Date();
		if (today.getDate() < 10) {
			day = '0' + String(today.getDate());
		} else {
			day = String(today.getDate());
		}
		console.log(x);
		console.log(this.state.uid);
		tmp = String(today.getFullYear()) + String(today.getMonth()+1) + String(day);
		try {
			let db = firestore;
			//const snapShot = await db.collection('body_temperature').doc("PPYnpLExZuXof2G0IqPqFGwQ9u33").collection('date').get();
			const snapShot = await db.collection('body_temperature').doc(user.uid).collection("date").get();
			var size;
      const for_num = await db.collection("body_temperature").doc("PPYnpLExZuXof2G0IqPqFGwQ9u33").collection("date").get().then(snap => {
				   size = snap.size // will return the collection size
			});
			console.log(size);
			var size_str = String(size);
			const data = [];
			snapShot.docs.forEach(doc => {
				console.log(doc.data().temp);
				var x = [];
				data.push(doc.data());
			});
			this.setState({
				data: data
			});
			console.log(this.state.data[0]);
			console.log(this.state.data[1]);
		}
		catch (e) {
			console.log('データ取得失敗', e);
		}
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
				<th>{this.state.data[i].date}</th>
				<th>{this.state.data[i].temp}</th>
				<th>{this.state.data[i].v}</th>
				<th>{this.state.data[i].cocoa}</th>
			</tr>);
		}
		result.push(<div>this.state.data</div>);
		return result;
	}

	render() {
		if (this.state.login) {
			return (
				<div>
					<table class="table"><tbody>
					<tr> 
						<th>日付</th>
						<th>体温</th>
						<th>予防接種得点(9点満点)</th>
						<th>COCOAの使用状況(1:はい,2:いいえ)</th>
					</tr>
						{this.getTableData()}
					</tbody></table>
					<p>{this.state.message}</p>
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

TempShow = connect((state)=> state) (TempShow);
export default TempShow;
