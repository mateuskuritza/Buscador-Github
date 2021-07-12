import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import UserNameContext from "../../contexts/UserNameContext";

import Repositories from "../../pages/repositories/Repositories";
import RepositoriesInfos from "../../pages/repositories/RepositoriesInfos";
import Repository from "../../pages/repositories/Repository";

describe("Route /repositorios", () => {
	test("existing component <Repositories />", () => {
		const history = createMemoryHistory();
		render(
			<UserNameContext.Provider value={{ userName: "mateus", setUserName: null }}>
				<Router history={history}>
					<Repositories />
				</Router>
			</UserNameContext.Provider>
		);
	});

	test("existing component <RepositoriesInfos />", () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<RepositoriesInfos userName="mateus" />
			</Router>
		);
	});

	test("existing component <Repository />", () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<Repository
					name="mateus"
					description="description test"
					url="https://static.wixstatic.com/media/edb7cb_d1851359710c4ec9acc747cd57418de9~mv2.png/v1/fill/w_1000,h_567,al_c,usm_0.66_1.00_0.01/edb7cb_d1851359710c4ec9acc747cd57418de9~mv2.png"
				/>
			</Router>
		);
	});

	test("warn message in <RepositoriesInfos /> without search", () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<RepositoriesInfos userName="" />
			</Router>
		);

		screen.getByText("Primeiro pesquise por um usuário");
	});
});
