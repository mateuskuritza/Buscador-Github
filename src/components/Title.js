import styled from "styled-components";

export default function Title({ content }) {
    return <TitleContainer>{content}</TitleContainer>;
}

const TitleContainer = styled.p`
	font-family: "Permanent marker", cursive;
	font-size: calc(1em + 1vw);
	cursor: default;
	padding: 20px 5px 10px 5px;
	text-align: center;

	@media (max-width: 630px) {
		font-size: 1.2em;
		padding: 20px 40px;
	}
`;
