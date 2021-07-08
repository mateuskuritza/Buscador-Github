import { act, getByText, queryAllByAltText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import UserNameContext from "../../contexts/UserNameContext";

import HistoricInfos from "../../pages/historico/HistoricInfos";
import History from "../../pages/historico/History";

describe("Route /historico", () => {
	test("existing component <HistoricInfos />", () => {
		const history = createMemoryHistory();
		let userName = "mateus";
		function setUserName(user) {
			userName = user;
		}
		render(
			<UserNameContext.Provider value={{ userName, setUserName }}>
				<Router history={history}>
					<HistoricInfos />
				</Router>
			</UserNameContext.Provider>
		);
	});

	test("existing component <History />", () => {
		const history = createMemoryHistory();
		render(
			<UserNameContext.Provider value={{ userName: "mateus", setUserName: null }}>
				<Router history={history}>
					<History />
				</Router>
			</UserNameContext.Provider>
		);
	});

	test("<HistoricInfos /> warn message without data", () => {
		const history = createMemoryHistory();
		let userName = "mateus";
		function setUserName(user) {
			userName = user;
		}
		render(
			<UserNameContext.Provider value={{ userName, setUserName }}>
				<Router history={history}>
					<HistoricInfos />
				</Router>
			</UserNameContext.Provider>
		);
		screen.getByText("Nenhuma pesquisa realizada até o momento!");
	});
});
