import React, { useState } from "react";
import { Row, Dropdown, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Actions } from "../../ReduxStore";
import { Toggle } from "./Toggle";
import "./styles.css";

const mapStateToProps = (state: any) => {
	return {
		data: state.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
		setSort: (param: String) => dispatch(Actions.updateSorting(param)),
		setNonVeg: (isNonVeg: boolean) =>
			dispatch(Actions.updateFilter(isNonVeg)),
	};
};

interface IProps {
	onSort: (param: string | null) => void;
	onFilter: (isNonVeg: boolean) => void;
}

const sortOptions = ["Price", "Rating"];

const Filter = (props: IProps) => {
	const [dropdownVal, setDropdown] = useState("Select");
	return (
		<Row
			style={{ height: "130px" }}
			className="justify-content-between px-4 align-items-center"
		>
			<Col>
				<Row className='align-items-center' >
					<h5>Sort by: &nbsp;</h5>
					<Dropdown>
						<Dropdown.Toggle className="sort-dropdown">
							{dropdownVal}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{sortOptions.map((optn, ind) => {
								return (
									<Dropdown.Item
										key={"123" + ind}
										onClick={() => {
											props.onSort(optn);
											setDropdown(optn);
										}}
									>
										{optn}
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</Row>
			</Col>
			<Col>
				<Row className='justify-content-end align-items-center'>
					<div >
						<Row>
								<Toggle
									onToggle={(status) => props.onFilter(status)}
								/>{" "}
								&nbsp;&nbsp;
							<h4 className="meat-text">Veg Pizzas</h4>
						</Row>
					</div>
					
				</Row>
			</Col>
		</Row>
	);
};

export const Options = connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter);
