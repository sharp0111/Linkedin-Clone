import React, { Component } from 'react';
import styles from './NavBar.css';
import linkedinLogo from './if_Popular_Social_Media-22_2329259.png';
import homeIcon from './home-icon.png';

class NavBar extends Component {

	render() {
		return (
			<nav className="NavBar">
                <img src={linkedinLogo} alt="LinkedIn logo" height="46" width="46"></img>
				<input className="NavBarSearch-field" type="text" onChange={this.submitFilter} placeholder="&#x1F50D; Search"></input>
                
                <div className="menu__buttons">
                    <a href='#'><img src={homeIcon} height="46" width="46" alt='button1'/></a>
                    <a href='#'><img src={homeIcon} height="46" width="46" alt='button2'/></a>
                    <a href='#'><img src={homeIcon} height="46" width="46" alt='button3'/></a>
                    <a href='#'><img src={homeIcon} height="46" width="46" alt='button4'/></a>
                </div>
			</nav>
		);
	}
};

export default NavBar;
