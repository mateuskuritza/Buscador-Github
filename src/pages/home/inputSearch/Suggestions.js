import { useEffect } from "react";
import styled from "styled-components";

import Suggestion from "./Suggestion";

import useGetUsers from "../../../Requests/useGetUsers";

export default function Suggestions({ searchName }) {
	const { loading, error, data, fetchData } = useGetUsers(searchName);

	useEffect(() => {
		fetchData();
	}, [searchName]);

	if (!searchName || loading) return null;

	if (error) return <h3>Usuário não encontrado!</h3>;

	return (
		<SuggestionsContainer>
			{data?.items?.map((u) => (
				<Suggestion key={u.id} userName={u.login} avatarUrl={u.avatar_url} />
			))}
		</SuggestionsContainer>
	);
}

const SuggestionsContainer = styled.div`
	position: absolute;
	top: 30px;
	left: 0;
	right: 0;
	margin: auto;
	width: 87%;
	border-radius: 0 0 10px 10px;

	background-color: ${(props) => props?.theme?.colors?.sideMenuBackgroundSecondary};
	color: ${(props) => props?.theme?.colors?.sideMenuTextMain};
	border: 1px solid rgb(0, 8, 76);
	border-top: none;
`;
