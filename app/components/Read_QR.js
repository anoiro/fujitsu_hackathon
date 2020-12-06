import dynamic from 'next/dynamic'
const QrReader = dynamic(
    () => import('react-qr-reader'),
    { ssr: false }
)
import React, { Component } from 'react';
import firebase from "firebase";
import { firestore,  auth } from "../store";
import "firebase/storage";


class QRread extends Component {
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
      delay: 100,
      result: 'No result',
		}
    this.handleScan = this.handleScan.bind(this)
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
	}
    handleScan(data){
      this.setState({
        result: data,
      })
    }
    handleError(err){
      console.error(err)
    }
    handClickFetchButton = async () => {
      const result = this.state.result
      var v = 0,cocoa = 0,temp = 0;
      for(let i = 0; i < result.length; i++){
        if(result[i] == 'v'){
          v = result[i + 3];
        }
        if(result[i] == 'a'){
          cocoa = result[i + 3];
        }
        if(result[i] == 'p'){
          temp = result[i + 3] + result[i + 4] + result[i + 6];
        }
      }
      const vn = Number(v);
      const cn = Number(cocoa);
      const tn = parseFloat(temp / 10);
			var today, tmp, day, size;
			today = new Date();
      console.log(result);
      if(result != null){
        const db = firestore;
        //const for_num = await db.collection("store").doc("001").collection("customer").get().then(snap => {
				let size;
        const for_num = await db.collection("store").doc(this.state.uid).collection("customer").get().then(snap => {
					   size = snap.size // will return the collection size
				});
				var size_str = String(size+1);
        await db.collection("store").doc(this.state.uid).collection("customer").doc(size_str)
          .set({
            v: vn,
            cocoa: cn,
            temp: tn,
						date: today
          });
      }
    }

		countNoApp = async () => {
			var today, tmp, day, size;
			today = new Date();
			if (today.getDate() < 10) {
				day = '0' + String(today.getDate());
			} else {
				day = String(today.getDate());
			}
			tmp = String(today.getFullYear()) + String(today.getMonth()+1) + String(day);
			let db = firestore;
        //const for_num = await db.collection("store").doc(this.state.uid).collection("customer").get().then(snap => {
        const for_num = await db.collection("store").doc("SvmaUozMYAVoQhtIZoBt298ELuR2").collection("customer").get().then(snap => {
					   size = snap.size // will return the collection size
				});
				var size_str = String(size+1);
        await db.collection("store").doc("001").collection("customer").doc(size_str)
          .set({
            v: 3,
            cocoa: 1,
            temp: 46,
						date: today
          });
		}
    render(){
      console.log(this.state)
      const previewStyle = {
        height: 240,
        width: 320,
      }

      return(
        <div>
        　<p>QRコードを読み取ってください</p>
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            />
            <br></br>
            <br></br>
            <br></br>
          <p>{this.state.result}</p>
          <button onClick={this.handClickFetchButton}>取得</button>
          <button onClick={this.countNoApp}>アプリ未使用者をカウント</button>
        </div>
      )
    }
  }

export default QRread;
