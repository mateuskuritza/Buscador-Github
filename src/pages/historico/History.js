import SideMenuResponsive from "../../components/SideMenu.js/SideMenuResponsive";

import Title from "../../components/Title";
import HistoricInfos from "./HistoricInfos";
import { PageContainer, Content } from "../../components/PageConfig";

export default function History() {
	return (
		<PageContainer>
			<SideMenuResponsive />
			<Content>
				<Title content="Histórico de Pesquisas" />
				<HistoricInfos />
			</Content>
		</PageContainer>
	);
}
