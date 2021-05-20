import React from "react";
import { useDispatch } from "react-redux";
import { searchText } from "../redux/actions";

export default function SearchBar() {
	const dispatch = useDispatch(searchText);
	function handleChange(event) {
		let text = event.target.value;
		dispatch(searchText(text));
	}

	return (
		<div>
			<input type="text" onChange={(e) => handleChange(e)} />
		</div>
	);
}
