import React, { Component } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Button} from "react-bootstrap";
import { connect } from 'react-redux';
import { firestore,  auth } from "../store";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: false
		}
	}
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({login: true});
			} else {
				this.setState({login: false});
			}
		});
	}

	render() {
		return (<footer>
			<nav class="navbar navbar-default navbar-expand-lg py-0 navbar-light color__footer ">
			  <div class="container font-weight-bold justify-content-center">
			    <button class="navbar-toggler mb-3" type="button" data-toggle="collapse" data-target="#navbarContent"
			      aria-controls="navbarContent" aria-expanded="false" aria-label="スマートフォン用ナビゲーション">
			      <span class="navbar-toggler-icon"></span>
			      <span class="toggler__txt">メニュー</span>
			    </button>
			    <div class="navbar-collapse collapse" id="navbarContent">
						{this.state.login
						?
			    	<ul class="w-100 navbar-nav pb-3 pb-lg-0 d-flex align-items-center justify-content-between">
							<li class="nav-item"><Link href="/"><a class="nav-link py-4">Home</a></Link></li>
			      	<li class="nav-item d-lg-none"><a href="/" class="btn btn-primary font-weight-bold">ログアウト</a></li>
							<li class="nav-item"><Link href="/upload"><a class="nav-link py-4">Upload</a></Link></li>
							<li class="nav-item"><Link href="/qr_display"><a class="nav-link py-4">QR Coad</a></Link></li>
							<li class="nav-item"><Link href="/store"><a class="nav-link py-4">Search Shop(実装中・ここ完成させたかった)</a></Link></li>
							<li class="nav-item"><Link href="/aboutus"><a class="nav-link py-4">About us</a></Link></li>
			    	</ul>
						:
			    	<ul class="w-100 navbar-nav pb-3 pb-lg-0 d-flex align-items-center justify-content-between">
							<li class="nav-item"><Link href="/"><a class="nav-link py-4">Home</a></Link></li>
							<li class="nav-item"><Link href="/registration"><a class="nav-link py-4">Registration</a></Link></li>
							<li class="nav-item"><Link href="/aboutus"><a class="nav-link py-4">About us</a></Link></li>
			      	<li class="nav-item d-lg-none"><a href="/login" class="btn btn-primary font-weight-bold">ログイン</a></li>
			    	</ul>
						}
			    </div>
			  </div>
			</nav>
			<div>{this.props.footer}</div>
			</footer>);
	}
}

Footer = connect((state)=> state) (Footer);
export default Footer;
