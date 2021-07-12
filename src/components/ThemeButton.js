import styled from "styled-components";
import { FaRegMoon as MoonIcon, FaSun as SunIcon } from "react-icons/fa";

export default function ThemeButton({ darkTheme, setDarkTheme }) {
    return (
        <ThemeButtonContainer darkTheme={darkTheme}>
            {darkTheme ? <SunIcon onClick={() => setDarkTheme(false)} /> : <MoonIcon onClick={() => setDarkTheme(true)} />}
        </ThemeButtonContainer>
    );
}

const ThemeButtonContainer = styled.div`
	position: fixed;
	bottom: 10px;
	right: 30px;
	background: transparent;
	font-size: 42px;
    color: ${props => props.darkTheme ? "white" : "black"};
`;
