import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";
import Link from 'next/link';

class Registration extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}

	constructor(props) {
		super(props);
		this.logined = this.logined.bind(this);
		this.state = {
			email: '',
			pass: '',
			message: 'mail，パスワードを入力してください．パスワードは6文字以上でお願いします．',
			signup: false
		}
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePass = this.onChangePass.bind(this);
		//this.getFireData();
	}

	onChangeEmail(e) {
		this.setState({email:e.target.value});
	}

	onChangePass(e) {
		this.setState({pass:e.target.value});
	}

	logined() {
		console.log('ログイン');
	}
	
	logouted() {
		Router.push('/');
	}

	signup = () => {
		auth.createUserWithEmailAndPassword(this.state.email, this.state.pass)
			.then(() => {
				console.log('ユーザ作成完了');
				this.setState({
					email: '',
					pass: '',
					message: '登録が完了しました',
					signup: true
				})
			})
			.catch((error) => {
				console.log('ユーザ作成失敗', error);
				this.setState({
					email: '',
					pass: '',
					message: '登録に失敗しました，正しいメールアドレス，パスワードは６文字以上で入力してください',
					signup: false
				})
			});
	}

	render() {
		if (this.state.signup) {
			return (
				<div>
					<p>{this.state.message}</p>
					<Link href="/login"><button>ログイン</button></Link>
				</div>
			)
		} else {
			return (
				<div>
					<p>{this.state.message}</p>
					<input type="email" size="30" value={this.state.email} onChange={this.onChangeEmail}/>
					<input type="password" size="30" value={this.state.pass} onChange={this.onChangePass}/>
					<button onClick={this.signup}>作成</button>
					<Link href="/"><button>ホームへ</button></Link>
				</div>
			)
		}
	}
}

Registration = connect((state)=> state) (Registration);
export default Registration;
