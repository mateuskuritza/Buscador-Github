import styled from "styled-components";

import Title from "../../components/Title";
import SideMenu from "../../components/SideMenu.js/SideMenu";
import { useState } from "react";
import DebounceInput from "./DebouceInput";
import UserInfos from "./UserInfos";

export default function Home() {
	const [userName, setUserName] = useState("");

	return (
		<HomeContainer>
			<SideMenu />
			<Content>
				<Title content="Buscador de Usuários do Github!" />
				<DebounceInput setValue={setUserName} />
                <UserInfos userName={userName}/>
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
