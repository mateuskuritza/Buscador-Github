import styled from "styled-components";
import SideMenu from "../../components/SideMenu.js/SideMenu";

import Title from "../../components/Title";

export default function History() {
	return (
		<HistoryContainer>
            <SideMenu />
			<Title content="Histórico de Pesquisas" />
		</HistoryContainer>
	);
}

const HistoryContainer = styled.div`
	width: 100%;
	text-align: center;
`;
