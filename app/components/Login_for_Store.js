import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";

class Login_for_Store extends Component {
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
			message: 'ログインしてください'
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

	login = () => {
		auth.signInWithEmailAndPassword(this.state.email, this.state.pass)
			.then(() => {
				console.log('ログイン完了');
				//this.props.dispatch({
				//	type: 'UPDATE_USER',
				//	value: {
				//		login: true
				//	}
				//});
				this.props.dispatch({
					type: 'UPDATE_USER',
					value: {
						login: true,
						username: '',
						email: '',
						data: [],
						items: []
					}
				});
				this.setState({
					email: '',	
					pass: '',
					message: 'ログインが完了しました',
					login: true 
				})
			})
			.catch((error) => {
				console.log('ログイン失敗', error);
				this.setState({
					email: '',	
					pass: '',
					message: 'ログインに失敗しました',
					login: false 
				})
			});
	}

	render() {
		if (this.props.login) {
			return (
				<div>
					<p>{this.state.message}</p>
					<p>{this.props.login}</p>
					<Link href="/for_store"><button>ホームへ</button></Link>
				</div>
			)
		} else {
			return (
				<div>
					<p>{this.state.message}</p>
					<p>{this.props.login}</p>
					<input type="email" size="30" value={this.state.email} onChange={this.onChangeEmail}/>
					<input type="password" size="30" value={this.state.pass} onChange={this.onChangePass}/>
					<button onClick={this.login}>ログイン</button>
					<Link href="/for_store"><button>ホームへ</button></Link>
				</div>
			)
		}
	}
}

Login_for_Store = connect((state)=> state) (Login_for_Store);
export default Login_for_Store;
