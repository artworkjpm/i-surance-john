import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchPosts, searchText } from "../redux/actions";
import { debounceTime, tap, distinctUntilChanged } from "rxjs/operators";
import { Subject } from "rxjs";

export default function SearchBar() {
	const dispatch = useDispatch(searchText, fetchPosts);
	const initialValue = useSelector((state) => state.searchText);
	const [onSearch$] = useState(() => new Subject());
	useEffect(() => {
		onSearch$.pipe(debounceTime(600), distinctUntilChanged(), tap()).subscribe((queryName) => {
			dispatch(fetchPosts(queryName));
		});
	}, [dispatch, onSearch$]);
	const handleSearch = (e) => {
		dispatch(searchText(e.target.value));
		onSearch$.next(e.target.value);
	};

	return (
		<div>
			<HashLabel>#</HashLabel>
			<Input type="text" onChange={(e) => handleSearch(e)} value={initialValue} />
		</div>
	);
}

const Input = styled.input`
	width: 90%;
	padding: 12px 20px 12px 35px;
	margin: 10px;
	display: inline-block;
	border: 2px solid #7000ff;
	border-radius: 35px;
	box-sizing: border-box;
	font-size: 18px;
`;

const HashLabel = styled.label`
	position: relative;
	left: 40px;
	font-size: 20px;
	font-weight: bold;
	color: white;
`;
