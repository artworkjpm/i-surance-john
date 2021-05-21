import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchPosts } from "../redux/actions";
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
		return !state.loading && state.items.length === 0 && <Loading> No Tweets found, try amending your search</Loading>;
	}

	return (
		<div>
			<SearchBar />
			{renderTweets()}
			{noTweetsFound()}
			{!state.loading &&
				state.items.map((el) => {
					return <Tweet data={el} key={el.id_str} />;
				})}
		</div>
	);
};

export default Posts;

const Loading = styled.div`
	text-align: center;
	margin-top: 10px;
`;
