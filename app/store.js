import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

// Firebaseの初期化
var config = {
  apiKey: " AIzaSyCZ6sEwVI-3J12CEyVDKxECAATjo_JNcsc ",
  authDomain: "qr-data-1ed1b.firebaseapp.com",
  databaseURL: "https://qr-data-1ed1b.firebaseio.com",
  projectId: "qr-data-1ed1b",
  storageBucket: "qr-data-1ed1b.appspot.com",
  messagingSenderId: " 480240410852 "
};

var fireapp;

try {
  firebase.initializeApp(config);
} catch (error) {
  console.log(error.message);
}

export default fireapp;

// ステート初期値
const initial = {
}

// レデューサー（ダミー）
function fireReducer(state = intitial, action) {
  switch (action.type) {
    // ダミー
    case 'TESTACTION':
      return state;
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
