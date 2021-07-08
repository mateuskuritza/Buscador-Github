import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./assets/styles/reset.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GlobalStyle from "./assets/styles/global";
import { ThemeProvider } from "styled-components";
import light from "./assets/styles/themes/light";
import dark from "./assets/styles/themes/dark";

import History from "./pages/historico/History";
import Home from "./pages/home/Home";
import Repositories from "./pages/repositorios/Repositories";
import ThemeButton from "./components/ThemeButton";

import UserNameContext from "./contexts/UserNameContext";

function App() {
	const [userName, setUserName] = useState(null);
	const [darkTheme, setDarkTheme] = useState(false);

	return (
		<UserNameContext.Provider value={{ userName, setUserName }}>
			<ThemeProvider theme={darkTheme ? dark : light}>
				<Router>
					<GlobalStyle />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/historico" exact component={History} />
						<Route path="/repositorios" exact component={Repositories} />
					</Switch>
					<ThemeButton darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
				</Router>
			</ThemeProvider>
		</UserNameContext.Provider>
	);
}

export default App;
