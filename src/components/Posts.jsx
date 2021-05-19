import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";

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
			{state.items.map((el) => {
				return (
					<div key={el.id}>
						<h2>{el.text}</h2>
					</div>
				);
			})}
		</div>
	);
};

export default Posts;
