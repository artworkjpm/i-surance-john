import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "./components/Posts";

const App = () => {
	const count = useSelector((state) => state);
	const dispatch = useDispatch();
	return (
		<div>
			<Posts />
		</div>
	);
};

export default App;
