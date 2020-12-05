import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";

class Login extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}

	constructor(props) {
		super(props);
		this.logined = this.logined.bind(this);
		this.state = {
			name: '',
			email: '',
			pass: '',
			tel: '',
			memo: ''
		}
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePass = this.onChangePass.bind(this);
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
			})
			.catch((error) => {
				console.log('ユーザ作成失敗', error);
			});
	}

	render() {
		return (
			<div>
				<input type="text" size="30" value={this.state.email} onChange={this.onChangeEmail}/>
				<input type="text" size="30" value={this.state.pass} onChange={this.onChangePass}/>
				<button onClick={this.signup}>作成</button>
				<Account onLogined={this.logined}
					onLogouted={this.logouted}/>
			</div>
		)
	}
}

export default Login;
