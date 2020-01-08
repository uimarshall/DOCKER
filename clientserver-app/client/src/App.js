import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import PageTwo from "./PageTwo";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />

					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						Learn React
					</a>
					<Link to="/">Home</Link>
					<Link to="/about">Other Page two</Link>
				</header>
			</div>
			<Route exact path="/" component={Fib} />
			<Route exact path="/about" component={PageTwo} />
		</Router>
	);
}

export default App;
