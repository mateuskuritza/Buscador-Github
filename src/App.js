import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

import Home from "./pages/home/Home";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
