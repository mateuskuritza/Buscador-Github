import Title from "../../components/Title";
import HistoryTable from "./HistoryTable";
import { PageContainer, Content } from "../../assets/styles/PageStyle";

export default function History() {
	return (
		<PageContainer>
			<Content>
				<Title content="Histórico de Pesquisas" />
				<HistoryTable />
			</Content>
		</PageContainer>
	);
}
