import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";

class QR_Read extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}

	constructor(props) {
		super(props);
		this.logined = this.logined.bind(this);
		this.state = {}
		this.read_QR = this.read_QR.bind(this);
	}

	read_QR(){}

	logined() {
		console.log('ログイン');
	}
	logouted() {
		Router.push('/');
	}

	render() {
		return (
			<div>
				<button onClick={this.read_QR.bind(this)}>QRコード読み取り</button>
				<Account onLogined={this.logined}
					onLogouted={this.logouted}/>
					<Link href="/for_store"><button>ホームへ</button></Link>
			</div>
		)
	}
}

export default QR_Read;