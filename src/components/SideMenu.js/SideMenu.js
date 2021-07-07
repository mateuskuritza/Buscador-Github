import styled from "styled-components";

import Content from "./Content";
import Topo from "./Top";
export default function SideMenu() {
	return (
		<SideMenuContainer>
            <Topo />
            <Content />
		</SideMenuContainer>
	);
}

const SideMenuContainer = styled.div`
	width: 25vw;
    min-width: 150px;
    height: 100vh;
    background-color: var(--side-menu-background-main);

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    padding: 20px 10px 0 10px;
`;
