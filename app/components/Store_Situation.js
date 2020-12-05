import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Account from '../components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";
import Link from 'next/link';
import SituShow from '../components/SituShow';

class Store_Situation extends Component {
	style = {
		fontSize: "12pt",
		padding: "5px 10px"
	}

	constructor(props) {
		super(props);
	}

	search_situation(){}

	render() {
		return (
			<div>
				<SituShow />
				<button onClick={this.search_situation.bind(this)}>店舗状況確認</button>
				<Link href="/for_store"><button>ホームへ</button></Link>
			</div>
		)
	}
}

export default Store_Situation;
