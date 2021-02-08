import React from "react";
import "./Toggle.css";

interface IProps {
	onToggle?: (status: boolean) => void;
}

export const Toggle = (props: IProps) => {
	function handleClick() {
		//@ts-ignore
		const status = document.getElementById("meat-toggle")?.checked;
		if (props.onToggle) {
			props.onToggle(status);
		}
	}
	return (
		<div className="content">
			<label className="switch">
				<input
					id="meat-toggle"
					onClick={() => handleClick()}
					type="checkbox"
				/>
				<span className="slider round"></span>
			</label>
		</div>
	);
};
