import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
var name; //ユーザー名

document.addEventListener('DOMContentLoaded', function () {
    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      //document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      //document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
  });

  let unsubscribe = firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('ログイン済み')
      document.getElementById('auth').innerText = 'ログインユーザー：'
      var user1 = firebase.auth().currentUser;
        if (user1 != null) {
        name = user1.displayName;
        document.getElementById('disp_name').innerText = name;
        }
    } else {
      console.log('未ログイン')
      document.getElementById('auth').innerText = '未ログイン'
      document.getElementById('disp_name').innerText = '';
    }
  })

  function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('ログイン完了')
        alert('ログイン完了')
      })
      .catch((error) => {
        console.log('ログイン失敗', error);
        alert('ログイン失敗')
      });
  }

  function logout() {
    firebase.auth().signOut().then(() => {
      console.log('ログアウトしました')
      alert('ログアウトしました')
      //document.getElementById('emailVerify').innerHTML = 'ログイン後に確認します'
    }).catch((error) => {
      console.log('ログアウト失敗', error);
      alert('ログアウト失敗')
    })
  } 
  
const Signup = () =>(
<div>
 <Head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>ログイン画面</title>  
    <script src="/__/firebase/7.15.5/firebase-app.js"></script>
    <script src="/__/firebase/7.15.5/firebase-analytics.js"></script>
    <script src="/__/firebase/7.15.5/firebase-auth.js"></script>
    <script src="/__/firebase/init.js"></script>
 </Head>

 <main>
    <h1>ログイン画面</h1>
    <p><span id="auth">認証確認中...</span>
        <span id="disp_name"></span></p>
    <p>以下の内容を入力してください。</p>
    <p>メールアドレス：<br/>
    <input type="email" id="email" placeholder="email"/></p>
    <p>パスワード：<br/>
    <input type="password" id="password" placeholder="password"/></p>
    <p>
    <input type="button" onclick="login()" value="ログイン"/>&nbsp;
    <input type="button" onclick="logout()" value="ログアウト"/>
    </p>
    <div>
        <Link href="/2">
        <a>新規登録ページへ&gt;&gt;</a><br/>
        </Link>
        <Link href="/">
        <a>ホームに戻る&gt;&gt;</a>
        </Link>
    </div>
 </main>
</div>
)

export default Signup;