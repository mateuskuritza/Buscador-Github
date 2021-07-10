import styled from "styled-components";

import Content from "./Content";
import Topo from "./Top";

export default function SideMenu({ width }) {
    return (
        <SideMenuContainer width={width}>
            <Topo />
            <Content />
        </SideMenuContainer>
    );
}

const SideMenuContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
    width: ${props => props.width >= 630 ? '30vw' : '100%'};
    background-color: ${(props) => props.theme.colors.second_color};
`;
