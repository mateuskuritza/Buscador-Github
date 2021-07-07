import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import History from "./pages/historico/History";
import Home from "./pages/home/Home";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/historico" exact component={History} />
			</Switch>
		</Router>
	);
}

export default App;
