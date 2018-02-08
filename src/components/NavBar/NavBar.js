import React, { Component } from 'react';
import styles from './NavBar.css';

class NavBar extends Component {

	render() {
		return (
			<div className="NavBar">
                <label>Who are you looking for?</label>
				<input className="NavBarSearch-field" type="text" onChange={this.submitFilter} ref={input => this.input = input} placeholder="Search"></input>
			</div>
		);
	}
};

export default NavBar;
