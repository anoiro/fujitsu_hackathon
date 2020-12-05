import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/storage";
import QRCode from "qrcode.react";
const Sample = () => {
  const [value, setValue] = useState("");
  async function getFireData() {
    const db = firebase.firestore();
    const doc = await db.collection("body_temperature").doc("4d84baLgsEO9Artf8EDxTOwt60t2").collection("date").doc("20201205").get();
    const result = JSON.stringify(doc.data());
    const temp = result.replace( "{\"vtext\":\"" , "" ) ;
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
export default Sample;
