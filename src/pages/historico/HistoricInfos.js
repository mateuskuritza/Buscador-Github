import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import UserNameContext from "../../contexts/UserNameContext";

export default function HistoricInfos() {
	const localSearchs = localStorage.getItem("search");
	const [searchs, setSearchs] = useState(false);
	const history = useHistory();

	const { setUserName } = useContext(UserNameContext);

	useEffect(() => {
		setSearchs(JSON.parse(localSearchs));
	}, [localSearchs]);

	function searchThis(thisUserName) {
		setUserName(thisUserName);
		history.push("/");
	}

	if (!searchs) return <strong>Nenhuma pesquisa realizada até o momento!</strong>;

	return (
		<HistoricInfosContainer>
			<table>
				<thead>
					<tr>
						<th>Usuário</th>
						<th>Horário</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					{searchs.map((s, i) => (
						<tr key={i} onClick={() => searchThis(s.userName)}>
							<td>{s.userName.substring(0, 15)}</td>
							<td>{s.hour}</td>
							<td>{s.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</HistoricInfosContainer>
	);
}

const HistoricInfosContainer = styled.div`
	margin: 50px auto;
	border: 1px solid ${(props) => props.theme.colors.textMain};
	box-shadow: 1px 1px 2px 1px ${(props) => props.theme.colors.textMain};

	thead > tr > th {
		font-weight: 700;
		padding: 4px;
		border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
	}
	td {
		padding: 10px 8px;
		border-left: 1px solid ${(props) => props.theme.colors.textMain};
	}

	td:first-of-type {
		border-left: none;
	}

	tbody > tr {
		cursor: pointer;
		:hover {
			background-color: rgb(224, 224, 224);
		}
	}
`;
