import React from "react";
import "./styles.css";

interface IProps {
	onForward: () => void;
}

export const Home = (props: IProps) => {
	return (
		<div className="cover-background">
			<div className="get-started" id="get-started">
				<h2 className="texting">Order Now <br/><span className="subtext">Order here</span></h2>
				<button className="order-now" onClick={() => props.onForward()}>Order Now!</button>
			</div>
		</div>
	);
};

