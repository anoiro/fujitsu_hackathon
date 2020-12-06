import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Navbar, Nav, Button} from "react-bootstrap";
import { connect } from 'react-redux';
import Link from 'next/link';

class Header extends Component {

	render() {
		return (<header>
			</header>);
	}
}

Header = connect((state)=> state) (Header);
export default Header;
