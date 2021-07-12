import Title from "../../components/Title";
import DebounceInput from "./inputSearch/DebouceInput";
import UserInfos from "./UserInfos";
import { PageContainer, Content } from "../../assets/styles/PageStyle";

export default function Home() {
	return (
		<PageContainer>
			<Content>
				<Title content="Buscador de Usuários do Github!" />
				<DebounceInput />
				<UserInfos />
			</Content>
		</PageContainer>
	);
}
