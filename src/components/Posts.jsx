import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchPosts, updateAmount } from "../redux/actions";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";

const Posts = () => {
	const dispatch = useDispatch(fetchPosts);
	const state = useSelector((state) => state);
	useEffect(() => {
		dispatch(fetchPosts("hulk"));
	}, [dispatch]);

	function renderTweets() {
		return state.loading && <Loading>Loading...</Loading>;
	}

	function noTweetsFound() {
		if (!state.loading && state.items.length === 0) {
			return <Loading>No Tweets found, try amending your search</Loading>;
		}
		return;
	}

	function handleScroll(event) {
		event.preventDefault();
		const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
		if (scrollHeight - scrollTop === clientHeight) {
			dispatch(updateAmount(state.amount));
			dispatch(fetchPosts(state.searchText, state.amount));
		}
	}

	return (
		<div>
			<SearchBar />
			{renderTweets()}
			{noTweetsFound()}
			<Content onScroll={handleScroll}>
				{state.items.map((el) => {
					return <Tweet data={el} key={el.id_str} />;
				})}
			</Content>
		</div>
	);
};

export default Posts;

const Content = styled.div`
	height: 600px;
	overflow: scroll;
`;

const Loading = styled.div`
	text-align: center;
	margin: 10px;
	font-weight: bold;
	background-color: #400b84;
	padding: 10px;
	color: #ffffff;
	border-radius: 35px;
`;
