import styled from "styled-components";

const PageContainer = styled.div`
	width: 100%;
	display: flex;
    height: 100vh;

	@media (max-width: 580px) {
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
    overflow-y: scroll;
`;

export { PageContainer, Content };
