import styled from "styled-components";

import Title from "../../components/Title";
import SideMenu from "../../components/SideMenu.js/SideMenu";
import DebounceInput from "./inputSearch/DebouceInput";
import UserInfos from "./UserInfos";

export default function Home() {
	return (
		<HomeContainer>
			<SideMenu />
			<Content>
				<Title content="Buscador de Usuários do Github!" />
				<DebounceInput />
				<UserInfos />
			</Content>
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	width: 100%;
	display: flex;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
