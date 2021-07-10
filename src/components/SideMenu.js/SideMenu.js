import styled from "styled-components";

import Content from "./Content";
import Topo from "./Top";

export default function SideMenu({ mobile }) {
	return (
		<SideMenuContainer mobile={mobile}>
			<Topo />
			<Content />
		</SideMenuContainer>
	);
}

const SideMenuContainer = styled.div`
	width: ${(props) => (props?.mobile ? "75vw" : "30vw")};
	position: ${(props) => (props?.mobile ? "fixed" : "inherit")};
	top: 0;
	right: clamp(20px, 25vw, 1000px);
	height: 100vh;
	min-width: 240px;
	background-color: ${(props) => props.theme.colors.second_color};

	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;
