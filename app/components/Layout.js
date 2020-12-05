import Link from 'next/link';
import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';
import { Navbar, Nav, Button} from "react-bootstrap";
import { connect } from 'react-redux';

class Layout extends Component {
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

			{this.props.children}

			<Footer footer="copyright KEITA-SHIMADA."/>
			</div>);
	}
}

Layout = connect((state)=> state) (Layout);
export default Layout;
