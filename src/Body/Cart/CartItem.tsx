import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Actions } from "../../ReduxStore";
import { MenuCardItem } from "../Menu/MenuCard/CardItem";
import "./styles.css";

const mapStateToProps = (state: any) => {
	return {
		data: state.data,
		cart: state.cart,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
		updateCart: (id: number, data: any) =>
			dispatch(Actions.updateCartItem(id, data)),
	};
};

interface IProps {
	item: any;
	cart: any[];
	updateCart: (id: number, data: any) => void;
}

const CartItemMain = (props: IProps) => {
	const { item } = props;

	const handleInc = (id: number) => {
		let ind = props.cart.findIndex((i) => i.id === id);
		if (ind === -1) return;
		let item = props.cart[ind];
		item.count++;
		props.updateCart(id, item);
	};

	const handleDec = (id: number) => {
		let ind = props.cart.findIndex((i) => i.id === id);
		if (ind === -1) return;
		let item = props.cart[ind];
		if (item.count > 0) {
			item.count--;
			props.updateCart(id, item);
			return;
		}
	};

	return (
		<Row className="mb-4 cart-item-container pt-4 pb-4">
			<Col xs={12} lg={2}>
				<img
					style={{ height: "145px", width: "145px" }}
					className="mx-auto"
					src={item.img_url}
				/>
			</Col>
			<Col xs={12} lg={8}>
				<Row className="justify-content-between">
					<Col xs={12} lg={5}>
						<h5 className="cart-item-title">{item.name} </h5>
					</Col>
				</Row>

				<p style={{ color: "GrayText" }}>
				<div className="quant-cart-container">
					<Col>
						<Row className='align-items-center'>
							<MenuCardItem
								currValue={item.count}
								onInc={() => handleInc(item.id)}
								onDec={() => handleDec(item.id)}
							/>
							<h5>
								<i className='fa fa-times' /> {item.size[0]}
							</h5>
						</Row>	
					</Col>
				</div> 
				</p>
				{item.toppings.length > 0 ? (
					<div>
						<strong>Toppings:</strong>
						{item.toppings.map((i: string) => {
							return <p className="p-0 m-0">{i}</p>;
						})}
					</div>
				) : null}
			</Col>
			<Col xs={12} lg={2}>
				<h4 style={{ float: "right" }}>₹ {item.price * item.count}</h4>
			</Col>
		</Row>
	);
};

export const CartItem = connect(
	mapStateToProps,
	mapDispatchToProps
)(CartItemMain);
