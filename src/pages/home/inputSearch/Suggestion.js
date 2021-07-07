import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import UserNameContext from "../../../contexts/UserNameContext";

export default function Suggestion({ userName, avatarUrl }) {
	const { setUserName } = useContext(UserNameContext);

	function registerNewSearch() {
		setUserName(userName);

		const now = dayjs().format("HH:MM:ss DD/MM/YYYY").split(" ");
		const newSearch = { userName, date: now[1], hour: now[0] };
		const localSearchs = JSON.parse(localStorage.getItem("search"));
		if (localSearchs) {
			const newLocalStorage = [newSearch, ...localSearchs];
			localStorage.setItem("search", JSON.stringify(newLocalStorage));
			return;
		}
		localStorage.setItem("search", JSON.stringify([newSearch]));
	}

	return (
		<SuggestionContainer onClick={() => registerNewSearch()}>
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
