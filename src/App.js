import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import History from "./pages/historico/History";
import Home from "./pages/home/Home";

import UserNameContext from "./contexts/UserNameContext";

function App() {
	const [userName, setUserName] = useState(null);

	return (
		<UserNameContext.Provider value={{ userName, setUserName }}>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/historico" exact component={History} />
				</Switch>
			</Router>
		</UserNameContext.Provider>
	);
}

export default App;
