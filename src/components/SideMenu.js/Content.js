import styled from "styled-components";

import Button from "./Button";

export default function Content() {
	return (
		<ContentContainer>
            <Button content="Pesquisar" to="/"/>
            <Button content="Histórico" to="/historico"/>
            <Button content="Em breve..." to="#"/>
		</ContentContainer>
	);
}

const ContentContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
    padding-bottom: 10px;
`;
