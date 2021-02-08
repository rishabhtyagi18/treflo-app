import React, { Fragment, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Menu from "./Menu";
import CartMain from "./Cart";

export const Body = () => {
	const [current, setCurrent] = useState(0)

	return (
		<Container>
			{current === 0 ? (
				<Menu nextPage={() => setCurrent(current + 1)} />
			) : current === 1 ? (
				<CartMain
					onBack={() => setCurrent(current - 1)}
					onForward={() => setCurrent(current + 1)}
				/>
			) : (
				<Container>
					<div className="final-screen-body">
						<h2>Order Placed! Thank you.</h2>
					</div>
				</Container>
			)}
		</Container>
	);
};
