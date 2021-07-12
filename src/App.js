import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./assets/styles/reset.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GlobalStyle from "./assets/styles/global";
import { ThemeProvider } from "styled-components";
import light from "./assets/styles/themes/light";
import dark from "./assets/styles/themes/dark";

import History from "./pages/history/History";
import Home from "./pages/home/Home";
import Repositories from "./pages/repositories/Repositories";
import ThemeButton from "./components/ThemeButton";

import UserNameContext from "./contexts/UserNameContext";
import SideMenu from "./components/SideMenu/SideMenu";
import MobileButton from "./components/MobileButton";

function App() {
    const [userName, setUserName] = useState(null);
    const [darkTheme, setDarkTheme] = useState(false);


    const [sideMenuClosed, setSideMenuClosed] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <UserNameContext.Provider value={{ userName, setUserName }}>
            <ThemeProvider theme={darkTheme ? dark : light}>
                <GlobalStyle />
                <ThemeButton darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                {width <= 630 && <MobileButton sideMenuClosed={sideMenuClosed} setSideMenuClosed={setSideMenuClosed} />}
                <Router>
                    {(width > 630 || !sideMenuClosed) && <SideMenu width={width} />}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/historico" exact component={History} />
                        <Route path="/repositorios/:userName" exact component={Repositories} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </UserNameContext.Provider>
    );
}

export default App;
