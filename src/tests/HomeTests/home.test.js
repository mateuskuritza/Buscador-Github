import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import UserNameContext from "../../contexts/UserNameContext";

import Home from "../../pages/home/Home";
import UserInfos from "../../pages/home/UserInfos";
import DebounceInput from "../../pages/home/inputSearch/DebouceInput";
import Suggestion from "../../pages/home/inputSearch/Suggestion";
import Suggestions from "../../pages/home/inputSearch/Suggestions";

describe("Route /", () => {
	test("existing component <Home />", () => {
		const history = createMemoryHistory();
		render(
			<UserNameContext.Provider value={{ userName: "mateus", setUserName: null }}>
				<Router history={history}>
					<Home />
				</Router>
			</UserNameContext.Provider>
		);
	});

	test("existing component <UserInfos />", async () => {
		const history = createMemoryHistory();
		render(
			<UserNameContext.Provider value={{ userName: "mateus", setUserName: null }}>
				<Router history={history}>
					<UserInfos />
				</Router>
			</UserNameContext.Provider>
		);
	});

	test("existing component <DebounceInput />", () => {
		const history = createMemoryHistory();
		render(
			<UserNameContext.Provider value={{ userName: "mateus", setUserName: null }}>
				<Router history={history}>
					<DebounceInput />
				</Router>
			</UserNameContext.Provider>
		);
	});

	test("existing component <Suggestions />", () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<Suggestions userName="mateus" />
			</Router>
		);
	});

	test("existing component <Suggestion />", () => {
		const history = createMemoryHistory();
		let userName = "mateus";
		function setUserName(user) {
			userName = user;
		}
		render(
			<UserNameContext.Provider value={{ userName, setUserName }}>
				<Router history={history}>
					<Suggestion
						userName="mateus"
						avatarUrl="https://static.wixstatic.com/media/edb7cb_d1851359710c4ec9acc747cd57418de9~mv2.png/v1/fill/w_1000,h_567,al_c,usm_0.66_1.00_0.01/edb7cb_d1851359710c4ec9acc747cd57418de9~mv2.png"
					/>
				</Router>
			</UserNameContext.Provider>
		);
	});

	test("warn message <UserInfos /> without search", async () => {
		const history = createMemoryHistory();
		let userName = null;
		function setUserName(user) {
			userName = user;
		}
		render(
			<UserNameContext.Provider value={{ userName, setUserName }}>
				<Router history={history}>
					<UserInfos />
				</Router>
			</UserNameContext.Provider>
		);

		screen.getByText("Pesquise por um usuário!");
	});
});
