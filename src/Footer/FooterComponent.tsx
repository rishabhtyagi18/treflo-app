import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import './Footer.css';

export const Footer = () => {
	return (
		<Jumbotron className="banner-style footer-style">
			<Row className='align-items-center justify-content-center'>
			<div className="site-branding">
				<h1 className="site-title">
					<img src="https://www.treflo.com/wp-content/uploads/2019/11/Treflo_website_icon-2.png" className="logo" alt="logo" />
				</h1>
			</div>
			</Row>
		</Jumbotron>
	);
};
