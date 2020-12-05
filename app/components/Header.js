import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (<header>
			<div>{this.props.header}</div>
			<div>{this.props.title}</div>
			</header>);
	}
}
export default Header;
