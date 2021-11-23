import React, { useState } from "react";
import "./styles.scss";
import logo from "../../assets/images/logo.svg";
import arrow from "../../assets/images/icon-arrow-down.svg";

const Header = () => {
	const [open, isOpen] = useState(false);

	const handleClick = () => {
		isOpen(!open);
	};

	return (
		<div className='header'>
			<div className='nav'>
				<a href='https://www.frontendmentor.io/home'>
					<img src={logo} alt='logo' />
				</a>
				<button className='hamburguer-menu' onClick={handleClick}>
					<svg
						className='hamburguer-menu'
						width='24'
						height='18'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z'
							fill='#FFF'
							fill-rule='evenodd'
						/>
					</svg>
				</button>
				<div className='desktop-menu'>
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
						<li>
							<a className='contacts' href='https://www.frontendmentor.io/home'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>

			{open ? (
				<div className='mobile-menu'>
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
						<li>
							<a className='contacts' href='https://www.frontendmentor.io/home'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			) : null}
			<div className='header-text'>
				<h2>We are creatives</h2>
				<img src={arrow} alt='arrow' />
			</div>
		</div>
	);
};

export default Header;
