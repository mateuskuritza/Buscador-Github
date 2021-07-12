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
    if (error) return <h3>Limite da API atingido, aguarde 1min e tente novamente!</h3>;
    if (data.total_count === 0) return <h3>Nenhum usuário encontrado!</h3>

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

	background-color: ${(props) => props?.theme?.colors?.first_color};
	color: ${(props) => props?.theme?.colors?.fourth_color};
	border: 1px solid rgb(0, 8, 76);
	border-top: none;

    div:last-of-type{
        :hover{
            border-radius: 0 0 10px 10px;
        }
    }
`;
