import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button({ content, to }) {
	return (
		<ButtonContainer>
			<Link to={to}>{content}</Link>
		</ButtonContainer>
	);
}

const ButtonContainer = styled.button`
	width: 100%;
	height: 30px;
	color: var(--side-menu-text-main);
	font-family: "Blinker", sans-serif;
	font-size: 20px;

	outline: none;
	border: none;
	background-color: transparent;
	cursor: pointer;

	text-align: left;

	:focus,
	:hover {
		background-color: var(--side-menu-background-secondary);
	}
`;
