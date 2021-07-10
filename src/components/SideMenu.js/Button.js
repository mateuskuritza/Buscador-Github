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
	color: ${(props) => props?.theme?.colors?.fourth_color};
	font-family: "Blinker", sans-serif;
	font-size: 20px;

	outline: none;
	border: none;
	background-color: transparent;
	cursor: pointer;
	text-align: left;

	a {
		display: block;
		width: 100%;
	}
	:focus,
	:hover {
		background-color: ${(props) => props?.theme?.colors?.sideMenuBackgroundSecondary};
	}
`;
