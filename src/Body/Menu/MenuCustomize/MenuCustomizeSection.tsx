import React from "react";
import { ToggleButton,ToggleButtonGroup } from "react-bootstrap";
import './style.css';

export {};
interface IProps {
	isRadio: boolean;
	data: string[];
	onSelection: (res: string | string[]) => void;
}

export const MenuCustomizeSection = (props: IProps) => {
	const { isRadio, data, onSelection } = props;
	if (data.length <= 0) return <div></div>;

	if (isRadio) {
		return (
			<ToggleButtonGroup
				name="single-select"
				type="radio"
				vertical
				onChange={(e) => onSelection([].concat(e))}
			>
				{data.map((i: any, ind) => {
					return (
						<ToggleButton
							variant="info"
							key={"121" + ind}
							value={i.size ? i.size : i.name}
						>
							{i.size ? i.size : i.name}
						</ToggleButton>
					);
				})}
			</ToggleButtonGroup>
		);
	} else {
		return (
			<ToggleButtonGroup
				vertical
				type="checkbox"
				name="multiple-select"
				onChange={(e) => onSelection(e)}
				style={{ marginBottom: "40px" }}
			>
				{data.map((i: any, ind) => {
					return (
						<ToggleButton
							size="sm"
							variant="info"
							key={"1221" + ind}
							value={i.size ? i.size : i.name}
						>
							{i.size ? i.size : i.name}
						</ToggleButton>
					);
				})}
			</ToggleButtonGroup>
		);
	}
};
