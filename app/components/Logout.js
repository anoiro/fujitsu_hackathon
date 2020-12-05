import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";

class Logout extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass: '',
			message: 'ログアウトできます',
			uid: '',
			login: false
		}
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePass = this.onChangePass.bind(this);
	}
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({uid: user.uid, login: true});
			} else {
				this.setState({login: true});
			}
		});
	}

	onChangeEmail(e) {
		this.setState({email:e.target.value});
	}

	onChangePass(e) {
		this.setState({pass:e.target.value});
	}

	logout = () => {
    auth.signOut()
			.then(() => {
				console.log('ログイン完了');
				this.props.dispatch({
					type: 'LOGOUT'
				});
				this.setState({
					email: '',	
					pass: '',
					message: 'ログアウトが完了しました',
					login: false 
				})
			})
			.catch((error) => {
				console.log('ログアウト失敗', error);
				this.props.dispatch({
					type: 'LOGIN'
				});
				this.setState({
					email: '',	
					pass: '',
					message: 'ログアウトに失敗しました',
					login: true
				})
			});
	}

	render() {
		if (this.state.login) {
			return (
				<div>
					<p>{this.state.message}</p>
					<button onClick={this.logout}>ログアウト</button>
					<Link href="/"><button>ホームへ</button></Link>
				</div>
			)
		} else {
			return (
				<div>
					<p>{this.state.message}</p>
					<p>{this.props.login}</p>
					<Link href="/"><button>ホームへ</button></Link>
				</div>
			)
		}
	}
}

Logout = connect((state)=> state) (Logout);
export default Logout;
