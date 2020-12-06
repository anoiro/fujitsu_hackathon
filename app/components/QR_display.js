import React, {Component, useState, useEffect } from "react";
import firebase from "firebase";
import { firestore,  auth } from "../store";
import "firebase/storage";
import QRCode from "qrcode.react";


class QR_display extends Component {
	// var today, tmp, day;
	// today = new Date();
	// if (today.getDate() < 10) {
	// 	day = '0' + String(today.getDate());
	// } else {
	// 	day = String(today.getDate());
	// }
	// tmp = String(today.getFullYear()) + String(today.getMonth()+1) + String(day);
	// var uid;
	// auth.onAuthStateChanged((user) => {
	// 	if (user) {
	// 		console.log(user);
	// 		console.log(user.uid);
	// 		uid = user.uid;
	// 	} else {
	// 		this.setState({login: false});
	// 	}
	// });
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
    	data: 'No data'
		}
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
		console.log(this.state.uid);
	}

  handClickFetchButton = async () => {
		await auth.onAuthStateChanged((user) => {
			if (user) {
				console.log(user);
				console.log(user.uid);
				this.setState({uid: user.uid, login: true});
			} else {
				this.setState({login: false});
			}
		});
		console.log(this.state.uid);
	 	var today, tmp, day;
	 	today = new Date();
	 	if (today.getDate() < 10) {
	 		day = '0' + String(today.getDate());
	 	} else {
	 		day = String(today.getDate());
	 	}
	 	tmp = String(today.getFullYear()) + String(today.getMonth()+1) + String(day);
    const db = firestore;
   	//const doc = await db.collection("body_temperature").doc("PPYnpLExZuXof2G0IqPqFGwQ9u33").collection("date").doc("1207").get();
   	const doc = await db.collection("body_temperature").doc(this.state.uid).collection("date").doc(tmp).get();
		console.log(doc.data());
   	const result = JSON.stringify(doc.data());
   	//const temp = result.replace( "{\"vtext\":\"" , "" ) ;
   	//const temp2 = "temp" + temp;
		this.setState({data: result});
		console.log(this.state.uid);
  }

	render(){
		return (
	    <div className="Sample">
			<button onClick={this.handClickFetchButton}>表示</button>
			<br></br>
			<br></br>
	      {<QRCode value={this.state.data} /> }
	    </div>
	  );
  }

};

export default QR_display;
