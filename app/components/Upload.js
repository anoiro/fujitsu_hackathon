import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { firestore,  auth } from "../store";
import Account from '../components/Account';
import TempShow from '../components/TempShow';
import Logout from '../components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Panel} from "react-bootstrap";
import Link from 'next/link';


class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'あなたの健康状態を入力してください',
			cocoa: 0,
			temp: 0,
			v: 0,
			corona_ans: 0,
			flu_ans: 0,
			pne_ans: 0,
			email: '',
			uid: '',
			login: false
		}
	}
	
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log(user.uid);
				this.setState({uid: user.uid, login: true});
			} else {
				this.setState({login: false});
			}
		});
	}

	onChangeCocoa = (e) => {
		if (e.target.checked) {
			this.setState({cocoa:1});
		} else {
			this.setState({cocoa:0});
		}
	}

	onChangeTemp = (e) => {
		this.setState({temp:Number(e.target.value)});
	}

	onChangeFlu = (e) => {
		if (e.target.checked) {
			this.setState({flu_ans:3});
		} else {
			this.setState({flu_ans:0});
		}
	}
	onChangePne = (e) => {
		if (e.target.checked) {
			this.setState({pne_ans:1});
		} else {
			this.setState({pne_ans:0});
		}
	}
	onChangeCorona = (e) => {
		if (e.target.checked) {
			this.setState({corona_ans:5});
		} else { this.setState({corona_ans:0});
		}
	}

	uploadDB = async () => {
		var today, tmp, day;
		today = new Date();
		if (today.getDate() < 10) {
			day = '0' + String(today.getDate());
		} else {
			day = String(today.getDate());
		}
		tmp = String(today.getFullYear()) + String(today.getMonth()+1) + String(day);
		const data={
			cocoa: this.state.cocoa,
			temp: this.state.temp,
			v: (this.state.corona_ans + this.state.flu_ans + this.state.pne_ans),
			date: tmp
		};
		let db;
		db = firestore;
		const res = await db.collection('body_temperature').doc(this.state.uid).collection('date').doc(tmp).set(data);
		const res2 = await db.collection('body_temperature').doc(this.state.uid).collection('date').doc(tmp).upload({
			"cocoa": this.state.cocoa,
			"temp": this.state.temp,
			"v": (this.state.corona_ans + this.state.flu_ans + this.state.pne_ans),
			"date": tmp
		});
	}

	upload = async () => {
		try {
			this.uploadDB();
			console.log('アップロード完了');
			this.setState({
				message: '正常にアップロードされました',
				cocoa: 0,
				temp: 0,
				v: 0,
				corona_ans: 0,
				flu_ans: 0,
				pne_ans: 0,
			})
		}
		catch(e) {
			console.log('アップロード失敗', e);
			this.setState({
				message: 'アップロードに失敗しました',
				cocoa: 0,
				temp: 0,
				v: 0
			})
		}
	}

	render() {
		return (
			<div>
				<p>{this.state.message}</p>
				<div class="container">
				  <div class="panel panel-default">
				    <div class="panel-heading">体調入力</div>
				    <div class="panel-body">
				      <form class="form-horizontal">
				        <div class="form-group">
				          <label class="col-sm-2 control-label">体温</label>
				          <div class="col-sm-12">
										<input type="number" value={this.state.temp} onChange={this.onChangeTemp}/>
				          </div>
								</div>
				        <div class="form-group">
				          <label class="col-sm-2 control-label">予防接種状況</label>
				          <div class="col-sm-12 checkbox">
				            <label><input type="checkbox" name="checkbox_flu" value={this.state.flu_ans} onChange={this.onChangeFlu}/>インフルエンザ</label>
				            <label><input type="checkbox" name="checkbox_pne" value={this.state.pne_ans} onChange={this.onChangePne}/>肺炎</label>
				            <label><input type="checkbox" name="checkbox_corona" value={this.state.corona_ans} onChange={this.onChangeCorona}/>コロナ</label>
				          </div>
				        </div>
				        <div class="form-group">
				          <label class="col-sm-2 control-label">COCOA登録状況</label>
				          <div class="col-sm-12 radio">
				            <label><input type="checkbox" name="cocoa_yes" value={this.state.cocoa} onChange={this.onChangeCocoa}/>登録しています</label>
				          </div>
				        </div>
				        <div class="form-group">
				          <div class="col-sm-offset-2 col-sm-12">
				            <button class="btn btn-default" onClick={this.upload}>送信</button>
				          </div>
				        </div>
				      </form>
				    </div>
				  </div>
				</div>
				<p>{this.state.message}</p>
				<TempShow />
				<Logout />
			</div>
		)
	}
}

Upload = connect((state)=> state) (Upload);
export default Upload;
