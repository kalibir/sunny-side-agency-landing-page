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
				<a href='#'>
					<img src={logo} alt='logo' />
				</a>
				<div className='hamburguer-menu' onClick={handleClick}>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</div>
				<div className='desktop-menu'>
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
						<li>
							<a className='contacts' href='#'>
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
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Services</a>
						</li>
						<li>
							<a href='#'>Projects</a>
						</li>
						<li>
							<a className='contacts' href='#'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			) : null}
			<div className='header-text'>
				<h2>We are creatives</h2>
				<img src={arrow} />
			</div>
		</div>
	);
};

export default Header;
