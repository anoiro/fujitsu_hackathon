import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";


// Firebase設定
var config = {
	apiKey: "AIzaSyDYZ2QiB2DbEbTvgoS-7RJuzD4p8_5Qeg4",
	databaseURL: "",
	projectId: "fujitsuhackathon",
	storageBucket: "",
	messagingSenderId: ""
};

// Firebase 初期化
var fireapp;
try {
	fireapp = firebase.initializeApp(config);
} catch (error) {
	console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
	login: false,
	username: '(click here!)',
	email: '',
	data: [],
	items: []
}

// レデューサー
function fireReducer(state = iniitial, action) {
	// ここにアクションを追加していく
	switch (action.type) {
		// ダミー
		case 'UPDATE_USER':
			return action.value;
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
