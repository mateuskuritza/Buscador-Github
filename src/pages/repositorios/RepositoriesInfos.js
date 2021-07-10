import { useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import useGetUserRepositories from "../../Requests/useGetUserRepositories";

import Repository from "./Repository";

export default function RepositoriesInfos({ userName }) {
	const { loading, error, data, fetchData } = useGetUserRepositories(userName);

	useEffect(() => {
		fetchData();
	}, [userName]);

	if (!userName) return <h3>Primeiro pesquise por um usuário</h3>;
	if (loading) return <Loader type="Puff" color="red" height={300} width={300} timeout={3000} />;
	if (error) return <h3>Usuário não encontrado!</h3>;
	if (data?.length === 0) return <h3>Esse usuário não possui nenhum repositório público!</h3>;

	return (
		<RepositoriesContainer>
			{data?.map((r) => (
				<Repository key={r.id} name={r.name} description={r.description} url={r.html_url} />
			))}
		</RepositoriesContainer>
	);
}

const RepositoriesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 20px auto;
	width: 90%;
`;
