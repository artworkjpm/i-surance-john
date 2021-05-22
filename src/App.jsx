import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Posts from "./components/Posts";
import styled from "styled-components";

import About from "./components/About";

const App = () => {
	return (
		<Container>
			<BrowserRouter>
				<NavBar>
					<Link to="/">Home </Link>|<Link to="/about"> About</Link>
				</NavBar>
				<Switch>
					<Route exact path="/" component={Posts}></Route>
					<Route exact path="/about" component={About} />
				</Switch>
			</BrowserRouter>
		</Container>
	);
};

export default App;

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const NavBar = styled.nav`
	color: white;
	> a {
		color: white;
		text-decoration: none;
	}
`;
