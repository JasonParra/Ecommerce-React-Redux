import React from "react";
import { Route, Switch } from "react-router-dom";

//Screens
import Home from "./app/screens/Home";

function App() {
	return (
		<Switch>
			<Route path="/" component={Home}></Route>
		</Switch>
	);
}

export default App;
