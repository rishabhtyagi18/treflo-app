import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Actions } from "../../ReduxStore";
import { MenuDisplay } from "./MenuDisplay";
import { Options } from "./Filter";

const mapStateToProps = (state: any) => {
	return {
		data: state.data,
		numItems: state.totalItems,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
	};
};

interface IProps {
	data: any;
	numItems: number;
	loadMenu: (res: any) => void;
	nextPage: () => void;
}

const MenuComponentNoRedux = (props: IProps) => {
	const [isLoading, setLoading] = useState(true);
	const [results, setResults] = useState<any[]>([]);
	const [sortParam, setSort] = useState<string|null>(null);
	
	const fetchMenu = async () => {
		let apiUrl = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
		try {
			let res = await fetch(apiUrl);
			let resjson = await res.json();
			props.loadMenu(resjson);
			setResults(resjson);

			handlerFilter(false, resjson);
		} catch (err) {
			console.error(err);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchMenu();
		
	}, []);


	const handlerFilter = (val: boolean, data: any[]) => {
		let temp = data.filter((i: any) => i.isVeg !== val);
		handlerSort(sortParam, temp);
	};

	const handlerSort = (val: string | null, data: any[]) => {
		setSort(val);
		let temp = data;
		if (val === "Price") {
			temp.sort((a, b) => {
				return a.price - b.price;
			});
		} else if (val === "Rating") {
			temp.sort((a, b) => {
				return b.rating - a.rating;
			});
		}
		setResults([...temp]);
	};

	if (isLoading) {
		return (
			<Row>
				{Array.apply(null, Array(4)).map(function (i, ind) {
					return (
						<Col key={'423'+ind} xs={12} sm={6} lg={4} xl={3}>
							<div className="menu-card">
								<Card
									style={{
										height: "300px",
										paddingTop: "30%",
									}}
								>
									<Spinner
										style={{
											placeSelf: "center",
											color: "#1daf65",
										}}
										animation="border"
									/>
									<p
										style={{
											placeSelf: "center",
											color: "#1daf65",
										}}
									>
										Loading
									</p>
								</Card>
							</div>
						</Col>
					);
				})}
			</Row>
		);
	}

	return (
		<div>
			<Options
				onFilter={(isNonVeg: boolean) => {handlerFilter(isNonVeg, props.data)}}
				onSort={(val) => handlerSort(val, results)}
			/>
			<MenuDisplay data={results} />
			<div className="next-btn">
				<Button
					onClick={() => props.nextPage()}
					style={{
						backgroundColor: "#1daf65",
						borderColor: "#1daf65",
					}}
				>
					Go To Cart <i className="fa fa-chevron-right" />
				</Button>
				<div className="count-badge">
					<div className="badge-count">{props.numItems} </div>
				</div>
			</div>
		</div>
	);
};

export const MenuComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuComponentNoRedux);
