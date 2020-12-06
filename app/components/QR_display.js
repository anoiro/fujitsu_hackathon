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
			data: 'No data',
			warning: '取得ボタンを押してください'
		};
  }

  handClickFetchButton = async () => {
    const db = firestore;
    const doc = await db.collection("body_temperature").doc("PPYnpLExZuXof2G0IqPqFGwQ9u33").collection("date").doc("1207").get();
    //const doc = await db.collection("body_temperature").doc(uid).collection("date").doc(tmp).get();
    const result = JSON.stringify(doc.data());
		let temp = 0;
    //const temp = result.replace( "{\"vtext\":\"" , "" ) ;
    //const temp2 = "temp" + temp;
		this.setState({data: result});
		for(let i = 0; i < result.length; i++){
			if(result[i] == 'p'){
				temp = result[i + 3] + result[i + 4] + result[i + 6];
			}
		}
		const tn = parseFloat(temp / 10);
		if(tn >= 37.5){
			this.setState({warning: '体温が37.5度を超えています。'})
		}
		else{
			this.setState({warning: '正常な体温です'})
		}
  }

	render(){
		return (
	    <div className="Sample">
			<p>{this.state.warning}</p>
			<button onClick={this.handClickFetchButton}>表示</button>
			<br></br>
			<br></br>
	      {<QRCode value={this.state.data} /> }
	    </div>
	  );
  }

};

export default QR_display;
