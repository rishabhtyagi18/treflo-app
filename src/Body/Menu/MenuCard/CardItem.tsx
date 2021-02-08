import React from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Actions } from "../../../ReduxStore";

const mapStateToProps = (state: any) => {
	return {
		data: state.data,
		cart: state.cart,
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
	onInc: () => void;
	onDec: () => void;
	currValue: number;
}

const CardItem = (props: IProps) => {
	const { onInc, onDec, currValue } = props;

	return (
		<Row className="align-items-center justify-content-start m-0">
			<i onClick={() => onInc()} className="fa fa-plus counter-icon" />
			&nbsp;
			<h4 className="counter-disp">{currValue}</h4>
			&nbsp;
			<i onClick={() => onDec()} className="fa fa-minus counter-icon" />
			&nbsp;&nbsp;
		</Row>
	);
};

export const MenuCardItem = connect(
	mapStateToProps,
	mapDispatchToProps
)(CardItem);
