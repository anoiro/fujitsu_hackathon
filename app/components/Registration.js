import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";

class Registration extends Component {
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
			memo: '',
			data: []
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
			})
			.catch((error) => {
				console.log('ユーザ作成失敗', error);
			});
	}

	//getFireData() {
	//	let db = fireapp.database();
	//	let ref = db.ref('sample/');
	//	let self = this;
	//	ref.orderByKey().limitToFirst(10)
	//		.on('value', (snapshot) => {
	//			self.setState({
	//			data: snapshot.val()
	//			});
	//		});
	//}

	//getTableData() {
	//	let result =[];
	//	if (this.state.data == null) {
	//		return [<tr key="0"><th>NO DATA</th></tr>];
	//	}
	//	for (let i in this.state.data) {
	//		result.push(<tr key={i}>
	//			<th>{this.state.data[i].ID}</th>
	//			<td>{this.state.data[i].name}</td>
	//		</tr>);
	//	}
	//	return result;
	//}

	render() {
		return (
			<div>
				<input type="text" size="30" value={this.state.email} onChange={this.onChangeEmail}/>
				<input type="text" size="30" value={this.state.pass} onChange={this.onChangePass}/>
				<button onClick={this.signup}>作成</button>
				<Account onLogined={this.logined}
					onLogouted={this.logouted}/>
				<table><tbody>
				</tbody></table>
			</div>
		)
	}
}

export default Registration;
