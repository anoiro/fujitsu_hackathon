import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";

class User_Update extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}

	constructor(props) {
		super(props);
		this.logined = this.logined.bind(this);
		this.state = {}
		this.update = this.update.bind(this);
	}

	update() {}

	logined() {
		console.log('ログイン');
	}
	logouted() {
		Router.push('/');
	}

	render() {
		return (
			<div>
				<button onClick={this.update.bind(this)}>ユーザー情報更新</button>
				<Account onLogined={this.logined}
					onLogouted={this.logouted}/>
			</div>
		)
	}
}

export default User_Update;