import { useContext } from "react";
import styled from "styled-components";
import UserNameContext from "../../../contexts/UserNameContext";

export default function Suggestion({ userName, avatarUrl }) {
	const { setUserName } = useContext(UserNameContext);

	return (
		<SuggestionContainer onClick={() => setUserName(userName)}>
			<img src={avatarUrl} alt="user avatar" />
			<p>{userName.substring(0, 15)}</p>
		</SuggestionContainer>
	);
}

const SuggestionContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 5px;
	img {
		border-radius: 50%;
		width: 40px;
		object-fit: contain;
		margin-right: 10px;
	}

	:hover {
		background-color: rgb(221, 219, 255);
	}
`;
