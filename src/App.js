import React from "react";
import "./App.css";

import SignUpPage from "./components/SignUpPage/SignUpPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CreateItemPage from "./components/CreateItemPage/CreateItemPage";
import ShowAllPage from "./components/ShowAllPage/ShowAllPage";
import ShowItemModalPage from "./components/ShowItemModalPage/ShowItemModalPage";

import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.div`
	height: 100vh;
	text-decoration: none;

	li {
		padding: 10px;
		display: inline;
	}
`;

function App() {
	return (
		<AppContainer>
			<ul>
				<li>
					<Link to="/signup">SignUp</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/create">Create</Link>
				</li>
				<li>
					<Link to="/all">All</Link>
				</li>
				<li>
					<Link to="/modal">Modal</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path="/signup" component={SignUpPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/create" component={CreateItemPage} />
				<Route exact path="/all" component={ShowAllPage} />
				<Route exact path="/modal" component={ShowItemModalPage} />
			</Switch>
		</AppContainer>
	);
}

export default App;
