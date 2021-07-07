import styled from "styled-components";
import SideMenu from "../../components/SideMenu.js/SideMenu";

import Title from "../../components/Title";
import HistoricInfos from "./HistoricInfos";

export default function History() {
	return (
		<HistoryContainer>
			<SideMenu />
			<Content>
				<Title content="Histórico de Pesquisas" />
				<HistoricInfos />
			</Content>
		</HistoryContainer>
	);
}

const HistoryContainer = styled.div`
	width: 100%;
	display: flex;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
