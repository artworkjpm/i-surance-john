import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";

const Posts = () => {
	const dispatch = useDispatch(fetchPosts);
	const state = useSelector((state) => state);
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	function renderTweets() {
		return state.loading && <div>Loading</div>;
	}

	return (
		<div>
			{renderTweets()}
			<SearchBar />
			{state.items.map((el) => {
				return <Tweet data={el} key={el.id_str} />;
			})}
		</div>
	);
};

export default Posts;
