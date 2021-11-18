import React from "react";
import "./styles.scss";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";

const Footer = () => {
	return (
		<footer>
			<img src={logo} alt='logo' />
			<ul>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Services</a>
				</li>
				<li>
					<a href='#'>Projects</a>
				</li>
			</ul>
			<div className='social-media-wrapper'>
				<a href='#'>
					<img src={facebook} alt='facebook' />
				</a>
				<a href='#'>
					<img src={instagram} alt='instagram' />
				</a>
				<a href='#'>
					<img src={twitter} alt='twitter' />
				</a>
				<a href='#'>
					<img src={pinterest} alt='pinterest' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
