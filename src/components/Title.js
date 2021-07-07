import styled from "styled-components";

export default function Title({ content }) {
	return <TitleContainer>{content}</TitleContainer>;
}

const TitleContainer = styled.p`
	font-family: "Permanent marker", cursive;
	font-size: clamp(1em, 1.2em + 1vw, 2em);
	cursor: default;
	margin: 20px auto;
`;
