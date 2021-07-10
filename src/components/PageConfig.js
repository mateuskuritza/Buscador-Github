import styled from "styled-components";

const PageContainer = styled.div`
	display: flex;
    width: 100%;
    
    @media (max-width: 630px) {
		flex-direction: column;
		align-items: center;
	}
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
    min-height: 100vh;
`;

export { PageContainer, Content };
