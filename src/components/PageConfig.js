import styled from "styled-components";

const PageContainer = styled.div`
	width: 100%;
	display: flex;

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
`;

export { PageContainer, Content };
