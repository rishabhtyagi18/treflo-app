import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Actions } from "../../ReduxStore";
import { CartItem } from "./CartItem";
import "./styles.css";

const mapStateToProps = (state: any) => {
	return {
		data: state.data,
		cart: state.cart,
		totalCost: state.totalCost,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
		addToCart: (item: any) => dispatch(Actions.addToCart(item)),
		removeFromCart: (itemId: any) =>
			dispatch(Actions.removeFromCart(itemId)),
	};
};

interface IProps {
	onBack: () => void;
	onForward: () => void;
	data: any[];
	cart: any[];
	totalCost: number;
}

const Cart = (props: IProps) => {
	if (props.cart.length > 0) {
		return (
			<div>
				<Row>
					<Col>
						<h2>Shopping Cart:</h2>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col>
						<h3 style={{ float: "right" }}>Total</h3>
					</Col>
				</Row>
				<Row>
					<Col>
						{props.cart.map((i) => {
							return <CartItem item={i} />;
						})}
					</Col>
				</Row>
				<Row className="checkout-row pt-4">
					<Col>
						<h5>
							Total: ₹ {props.totalCost + 0.18 * props.totalCost}{" "}
							(including 18% GST)
						</h5>
						<Button
							onClick={() => props.onForward()}
							style={{
								backgroundColor: "#28e084",
								borderColor: "#28e084",
								float: "right",
							}}
						>
							Checkout
						</Button>
					</Col>
				</Row>

				<div className="prev-btn">
					<Button
						onClick={() => props.onBack()}
						style={{
							backgroundColor: "#28e084",
							borderColor: "#28e084",
						}}
					>
						<i className="fa fa-chevron-left" />
						&nbsp;Back
					</Button>
				</div>
			</div>
		);
	} else {
		return (
			<Row className="justify-content-center pt-5 pb-5">
				<h4>Empty : Please Add a Pizza.</h4>
				<div className="prev-btn">
					<Button
						onClick={() => props.onBack()}
						style={{
							backgroundColor: "#1daf65",
							borderColor: "#1daf65",
						}}
					>
						<i className="fa fa-chevron-left" />
						&nbsp;Back
					</Button>
				</div>
			</Row>
		);
	}
	{
	}
};

export const CartMain = connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
