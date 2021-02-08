import React from "react";
import { Col, Row } from "react-bootstrap";
import { MenuCard } from "./MenuCard/MenuCard";

interface IProps {
	data: any[];
}

export const MenuDisplay = (props: IProps) => {
	if(props.data.length > 0){
		return (
			<Row>
				{props.data.map((pza) => {
					return (
						<Col key={pza.id} xs={12} sm={6} lg={4} xl={3}>
							<MenuCard pza={pza} />
						</Col>
					);
				})}
			</Row>
		);
	}
	
	return(
		<h2 style={{textAlign:'center', paddingTop:'20vh', paddingBottom:'20vh'}}>
			Something went wrong, please try again.
		</h2>
	)
	
};
