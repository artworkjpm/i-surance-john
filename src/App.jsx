import "./App.css";
import React from "react";
import Posts from "./components/Posts";
import styled from "styled-components";

const App = () => {
	return (
		<Container>
			<Posts />
		</Container>
	);
};

export default App;

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;
