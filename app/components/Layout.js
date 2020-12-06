import Link from 'next/link';
import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';
import { Nav, Button} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { firestore,  auth } from "../store";

class Layout extends Component {
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
		return (<div>
			{style}
			<Head>
				<title>{this.props.title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport'
					content='initial-scale=1.0, width=device-width' />
			</Head>
			<Header header={this.props.header}
			title={this.props.title} />
				<div class="container py-4">
			    <div class="row no-gutters">
			      <div class="col-lg-3 d-none d-lg-flex align-items-center">
			      </div>
			      <div class="col-lg-6 .color__logo">
			        <h1 class="text-center mb-0">
								<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-medical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			  					<path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
			  					<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
								</svg>
								<a>CHAOC</a>
								<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-medical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			  					<path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
			  					<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
								</svg>
			        </h1>
			      </div>
						{(this.state.login)
							?
			      	<div class="col-lg-3 d-none d-lg-flex align-items-center justify-content-end">
			          	<a href="/logout" class="btn btn-primary font-weight-bold">ログアウト</a>
			      	</div>
							:
			      	<div class="col-lg-3 d-none d-lg-flex align-items-center justify-content-end">
			          	<a href="/login" class="btn btn-primary font-weight-bold">ログイン</a>
			      	</div>
						}
			    </div>
			  </div>
			  <nav class="navbar navbar-default navbar-expand-lg py-0 navbar-light color__navi ">
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
			          	<li class="nav-item d-lg-none"><a href="/logout" class="btn btn-primary font-weight-bold">ログアウト</a></li>
									<li class="nav-item"><Link href="/upload"><a class="nav-link py-4">Upload</a></Link></li>
									<li class="nav-item"><Link href="/qr_display"><a class="nav-link py-4">QR Coad</a></Link></li>
									<li class="nav-item"><Link href="/store"><a class="nav-link py-4">Search Shop</a></Link></li>
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
			{this.props.children}

			<Footer footer="copyright KEITA-SHIMADA."/>
			</div>);
	}
}

Layout = connect((state)=> state) (Layout);
export default Layout;
