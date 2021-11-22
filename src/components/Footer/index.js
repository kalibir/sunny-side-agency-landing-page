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
					<a href='https://www.frontendmentor.io/home'>About</a>
				</li>
				<li>
					<a href='https://www.frontendmentor.io/home'>Services</a>
				</li>
				<li>
					<a href='https://www.frontendmentor.io/home'>Projects</a>
				</li>
			</ul>
			<div className='social-media-wrapper'>
				<a href='https://www.frontendmentor.io/home'>
					<img src={facebook} alt='facebook' />
				</a>
				<a href='https://www.frontendmentor.io/home'>
					<img src={instagram} alt='instagram' />
				</a>
				<a href='https://www.frontendmentor.io/home'>
					<img src={twitter} alt='twitter' />
				</a>
				<a href='https://www.frontendmentor.io/home'>
					<img src={pinterest} alt='pinterest' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
