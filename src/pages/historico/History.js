import Title from "../../components/Title";
import HistoricInfos from "./HistoricInfos";
import { PageContainer, Content } from "../../components/PageConfig";

export default function History() {
	return (
		<PageContainer>
			<Content>
				<Title content="Histórico de Pesquisas" />
				<HistoricInfos />
			</Content>
		</PageContainer>
	);
}
