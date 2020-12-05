import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';


// Firebase設定
var config = {
	apiKey: "AIzaSyDYZ2QiB2DbEbTvgoS-7RJuzD4p8_5Qeg4",
	authDomain: "fujitsuhackathon.firebaseapp.com",
	databaseURL: "https://fujitsuhackathon.firebaseio.com",
	projectId: "fujitsuhackathon",
	storageBucket: "fujitsuhackathon.appspot.com",
	messagingSenderId: "699704083467",
	appId: "1:699704083467:web:80a13effed46be0849f30e",
	measurementId: "G-XBZQ8BRVD7"
};

// Firebase 初期化
//var fireapp;
firebase.apps.length
  ? firebase.app()
	:	firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

//try {
//	fireapp = firebase.initializeApp(config);
//} catch (error) {
//	console.log(error.message);
//}
//export default fireapp;

// ステート初期値
const initial = {
	login: false,
	id: '',
	username: '(click here!)',
	email: '',
	data: [],
	items: []
}

// レデューサー
function fireReducer(state = initial, action) {
	// ここにアクションを追加していく
	switch (action.type) {
		// ダミー
		case 'UPDATE_USER':
			return action.value;
		case 'LOGIN':
			return {...state, login: true};
		case 'LOGOUT':
			return {...state, login: false};
		// デフォルト
		default:
			return state;
	}
}

// initStore関数
export function initStore(state = initial) {
	return createStore(fireReducer, state,
		applyMiddleware(thunkMiddleware))
}
