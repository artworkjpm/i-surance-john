import React from "react";
import { useDispatch } from "react-redux";
import { fetchPosts, searchText } from "../redux/actions";

export default function SearchBar() {
	const dispatch = useDispatch(searchText, fetchPosts);
	function handleChange(event) {
		dispatch(searchText(event.target.value));
		dispatch(fetchPosts());
	}

	return (
		<div>
			<input type="text" onChange={(e) => handleChange(e)} />
		</div>
	);
}
