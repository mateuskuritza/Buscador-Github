import Title from "../../components/Title";
import DebounceInput from "./inputSearch/DebouceInput";
import UserInfos from "./UserInfos";
import SideMenuResponsive from "../../components/SideMenu.js/SideMenuResponsive";
import { PageContainer, Content } from "../../components/PageConfig";
export default function Home() {
	return (
		<PageContainer>
			<SideMenuResponsive />
			<Content>
				<Title content="Buscador de Usuários do Github!" />
				<DebounceInput />
				<UserInfos />
			</Content>
		</PageContainer>
	);
}
