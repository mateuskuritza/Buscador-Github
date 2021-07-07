import Title from "../../components/Title";
import SideMenuResponsive from "../../components/SideMenu.js/SideMenuResponsive";
import { PageContainer, Content } from "../../components/PageConfig";
import { useContext } from "react";
import UserNameContext from "../../contexts/UserNameContext";

import RepositoriesInfos from "./RepositoriesInfos";

export default function Repositories() {
	const { userName } = useContext(UserNameContext);

	return (
		<PageContainer>
			<SideMenuResponsive />
			<Content>
				<Title content={userName && "Repositórios do " + userName.substring(0, 30)} />
				<RepositoriesInfos userName={userName} />
			</Content>
		</PageContainer>
	);
}
