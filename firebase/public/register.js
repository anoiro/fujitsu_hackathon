import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

document.addEventListener('DOMContentLoaded', function() {
    // wite
    var db = firebase.firestore();
    document.getElementById("sendtext-btn").onclick = function() {
      db.collection("datas").doc("text").set(
        {"vtext":document.getElementById("name").value}).then(function() {
            console.log("Document successfully written!");
        });
        db.collection("datas").doc("text").set(
         {"vtext":document.getElementById("e-mail").value}).then(function() {
            console.log("Document successfully written!");
        });
        db.collection("datas").doc("text").set(
         {"vtext":document.getElementById("pass").value}).then(function() {
            console.log("Document successfully written!");
        });
    };
    // read
    db.collection("datas").doc("text").get().then(function(doc) {
      document.getElementById("name").value=doc.data().vtext
    });
    db.collection("datas").doc("text").get().then(function(doc) {
      document.getElementById("e-mail").value=doc.data().vtext
    });
    db.collection("datas").doc("text").get().then(function(doc) {
      document.getElementById("pass").value=doc.data().vtext
    });
});

const Register = () =>(
<div>
<Head>
<meta charset="utf-8"/>
    <title>test of CHAOC</title>
    <script defer src="/__/firebase/7.14.2/firebase-app.js"></script>
    <script defer src="/__/firebase/7.14.2/firebase-firestore.js"></script>    
    <script defer src="/__/firebase/init.js"></script>
</Head>

<main>
    <h1>ユーザー登録</h1>
    <div>以下の内容を入力してください。</div><br/>
    お名前：<br/>
    <input type="text" id="name" required/><br/><br/>
    メールアドレス：<br/>
    <input type="text" id="e-mail" required/><br/><br/>
    パスワード：<br/>
    <input type="text" id="pass" required/><br/><br/>

    <button id="sendtext-btn">送信</button><br/><br/>
    <div>
    <Link href="/">
    <a>ホームに戻る &gt;&gt;</a>
    </Link>
    </div>
</main>
</div>
);export default Register;