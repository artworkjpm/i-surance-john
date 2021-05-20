import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchPosts, searchText } from "../redux/actions";

export default function SearchBar() {
	const dispatch = useDispatch(searchText, fetchPosts);
	function handleChange(event) {
		dispatch(searchText(event.target.value));
		setTimeout(() => {
			dispatch(fetchPosts());
		}, 1000);
	}

	return (
		<div>
			<HashLabel>#</HashLabel>
			<Input type="text" onChange={(e) => handleChange(e)} />
		</div>
	);
}

const Input = styled.input`
	width: 90%;
	padding: 12px 20px 12px 35px;
	margin: 10px;
	display: inline-block;
	border: 2px solid green;
	border-radius: 35px;
	box-sizing: border-box;
	font-size: 18px;
`;

const HashLabel = styled.label`
	position: relative;
	left: 40px;
	font-size: 20px;
	font-weight: bold;
`;
