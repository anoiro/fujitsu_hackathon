
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";
import Link from 'next/link';

class Registration_for_Store extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass: '',
			created: '',
			message: 'mail，パスワードを入力してください．パスワードは6文字以上でお願いします．',
			signup: false,
			uid: '',
			login: false,
			address: '',
			name: '',
			url: ''
		}
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePass = this.onChangePass.bind(this);
	}
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log(user);
				console.log(user.uid);
				this.setState({uid: user.uid, login: true});
			} else {
				this.setState({login: false});
			}
		});
	}

	onChangeEmail(e) {
		this.setState({email:e.target.value});
	}

	onChangePass(e) {
		this.setState({pass:e.target.value});
	}

	onChangeaddress = (e) => {
		this.setState({address:e.target.value});
	}

	onChangename = (e) => {
		this.setState({name:e.target.value});
	}

	onChangeurl = (e) => {
		this.setState({url:e.target.value});
	}

	addUidDB = async (uid) => {
		var today, tmp, day;
		today = new Date();
		if (today.getDate() < 10) {
			day = '0' + String(today.getDate());
		} else {
			day = String(today.getDate());
		}
		tmp = String(today.getFullYear()) + String(today.getMonth()+1) + String(day);
		let db;
		db = firestore;
		const data = {
			date: tmp,
			address: this.state.address,
			name: this.state.name,
			url: this.state.url
		};
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log(user);
				console.log(user.uid);
				this.setState({uid: user.uid, login: true});
			} else {
				this.setState({login: false});
			}
		});
		const res = await db.collection('store').doc(this.state.uid).set(data);
	}

	signup = async () => {
		try {
			const user = await auth.createUserWithEmailAndPassword(this.state.email, this.state.pass);
			this.addUidDB(user.uid);
			console.log('ユーザ作成完了');
			this.props.dispatch({
				type: 'UPDATE_USER',
				value: {
					email: this.state.email
				}
			});
			this.setState({
				email: this.state.email,
				pass: '',
				message: '登録が完了しました',
				signup: true
			})
		}
		catch(e) {
			console.log('ユーザ作成失敗', e);
			this.setState({
				email: '',
				pass: '',
				message: '登録に失敗しました，正しいメールアドレス，パスワードは６文字以上で入力してください',
				signup: false
			})
		};
	}

	render() {
		if (this.state.signup) {
			return (
				<div>
					<p>{this.state.message}</p>
					<Link href="/login_for_store"><button>ログイン</button></Link>
				</div>
			)
		} else if (this.state.login) {
			return (
				<div>
					<p>あなたはログイン済みです</p>
				</div>
			)
		} else {
			return (
				<div>
					<p>{this.state.message}</p>
					<input type="email" size="30" value={this.state.email} onChange={this.onChangeEmail}/>
					<input type="password" size="30" value={this.state.pass} onChange={this.onChangePass}/>
					<input type="text" size="30" value={this.state.address} onChange={this.onChangeaddress}/>
					<input type="text" size="30" value={this.state.name} onChange={this.onChangename}/>
					<input type="text" size="30" value={this.state.url} onChange={this.onChangeurl}/>
					<button onClick={this.signup}>作成</button>
					<Link href="/"><button>ホームへ</button></Link>
				</div>
			)
		}
	}
}

Registration_for_Store = connect((state)=> state) (Registration_for_Store);
export default Registration_for_Store;
