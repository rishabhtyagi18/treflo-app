import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Actions } from "../../../ReduxStore";
import { MenuCustomizeSection } from "./MenuCustomizeSection";

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
	baseData: any;
	isOpen: boolean;
	hideModal: () => void;
	addToCart: (item: any) => void;
}

export const MenuCustomize = (props: IProps) => {
	const [size, setSize] = useState<string | string[] | null>(null);
	const [toppings, setToppings] = useState<string | string[]>([]);
	const [hasError, setError] = useState(false);

	const handleAdding = () => {
		if (!size) {
			setError(true);
			return;
		} else {
			setError(false);
		}
		props.addToCart({ ...props.baseData, size, toppings });
		handleHide();
	};

	const handleHide = () => {
		setError(false);
		setSize(null);
		setToppings([]);
		props.hideModal();
	};

	return (
		<Modal
			show={props.isOpen}
			size="lg"
			onHide={() => {
				handleHide();
			}}
		>
			<Modal.Header style={{ textAlign: "center" }}>
				<h2>Customize</h2>
			</Modal.Header>
			<Modal.Body>
				<Col>
					<Row className="justify-content-center">
						<h4>Select Size:</h4>
					</Row>
					<Row className="justify-content-center">
						<MenuCustomizeSection
							isRadio={props.baseData.size[0].isRadio}
							data={props.baseData.size[0].items}
							onSelection={(x: string | string[]) => setSize(x)}
						/>
					</Row>
					<Row>
						{hasError ? (
							<p style={{ color: "red" }}>Please select size</p>
						) : (
							<p>&nbsp;</p>
						)}
					</Row>
					<Row className="pt-4 justify-content-center">
						<h4>Select Toppings:</h4>
					</Row>
					<Row className="justify-content-center">
						<MenuCustomizeSection
							isRadio={props.baseData.toppings[0].isRadio}
							data={props.baseData.toppings[0].items}
							onSelection={(x: string | string[]) =>
								setToppings(x)
							}
						/>
					</Row>
				</Col>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => handleAdding()} variant="danger">
					<i className="fa fa-plus" />
					&nbsp;&nbsp;Add To Cart
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export const CustomizeMenu = connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuCustomize);
