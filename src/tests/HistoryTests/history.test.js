import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import UserNameContext from "../../contexts/UserNameContext";

import HistoryTable from "../../pages/history/HistoryTable";
import History from "../../pages/history/History";

describe("Route /historico", () => {
    test("existing component <HistoryTable />", () => {
        const history = createMemoryHistory();
        let userName = "mateus";
        function setUserName(user) {
            userName = user;
        }
        render(
            <UserNameContext.Provider value={{ userName, setUserName }}>
                <Router history={history}>
                    <HistoryTable />
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

    test("<HistoryTable /> warn message without data", () => {
        const history = createMemoryHistory();
        let userName = "mateus";
        function setUserName(user) {
            userName = user;
        }
        render(
            <UserNameContext.Provider value={{ userName, setUserName }}>
                <Router history={history}>
                    <HistoryTable />
                </Router>
            </UserNameContext.Provider>
        );
        screen.getByText("Nenhuma pesquisa realizada até o momento!");
    });
});
