import styled from "styled-components";

export default function Title({ content }) {
	return <TitleContainer>{content}</TitleContainer>;
}

const TitleContainer = styled.p`
	font-family: "Permanent marker", cursive;
	font-size: calc(1em + 1vw);
	cursor: default;
	padding: 20px 5px 0 5px;
	text-align: center;

	@media (max-width: 500px) {
		text-align: left;
		font-size: 1.2em;
		padding: 0;
		padding-right: 50px;
	}
`;
