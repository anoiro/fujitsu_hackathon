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
      console.log(result);
      if(result != null){
        const db = firestore;
        //const for_num = await db.collection("store").doc("001").collection("customer").get().then(snap => {
        const for_num = await db.collection("store").doc(this.state.uid).collection("customer").get().then(snap => {
					   size = snap.size // will return the collection size
				});
				var size_str = String(size);
        await db.collection("store").doc("001").collection("customer").doc(size)
          .set({
            v: vn,
            cocoa: cn,
            temp: tn
          });
      }
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
        </div>
      )
    }
  }

export default QRread;
