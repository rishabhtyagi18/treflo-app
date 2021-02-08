import React from "react";
import './Header.css';

export const Header = () => {
	return (
		<div className="header-main">
			<div className="site-branding">
				<h1 className="site-title">
					<img src="https://www.treflo.com/wp-content/uploads/2019/11/Treflo_website_icon-2.png" className="logo" alt="logo" />
				</h1>
			</div>
			<p className="site-description">Stone baked pizza & goodies!</p>
    	</div>
	);
};
