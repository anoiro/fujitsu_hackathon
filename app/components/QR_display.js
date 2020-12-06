import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { firestore,  auth } from "../store";
import "firebase/storage";
import QRCode from "qrcode.react";

const QR_display = () => {
	var today, tmp, day;
	today = new Date();
	if (today.getDate() < 10) {
		day = '0' + String(today.getDate());
	} else {
		day = String(today.getDate());
	}
	tmp = String(today.getFullYear()) + String(today.getMonth()+1) + String(day);
	var uid;
	//auth.onAuthStateChanged((user) => {
	//	if (user) {
	//		console.log(user);
	//		console.log(user.uid);
	//		uid = user.uid;
	//	} else {
	//		this.setState({login: false});
	//	}
	//});
  const [value, setValue] = useState("");
  async function getFireData() {
    const db = firestore;
    const doc = await db.collection("body_temperature").doc("PPYnpLExZuXof2G0IqPqFGwQ9u33").collection("date").doc(tmp).get();
    //const doc = await db.collection("body_temperature").doc(uid).collection("date").doc(tmp).get();
    const result = JSON.stringify(doc.data());
    //const temp = result.replace( "{\"vtext\":\"" , "" ) ;
    //const temp2 = "temp" + temp;
    setValue(result);
  }
  useEffect(() => {
    getFireData();
  }, []);
  return (
    <div className="Sample">
      {value ? <QRCode value={value} /> : "...loading"}
    </div>
  );
};
export default QR_display;
