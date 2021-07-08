import styled from "styled-components";

import { VscGithub } from "react-icons/vsc";

export default function Top() {
	return (
		<TopContainer>
			<p>Desenvolvido utilizando a GitHub REST API disponível em:</p>
			<GitHubDocsContainer>
				<a href="https://docs.github.com/en/rest">
					<VscGithub className="icon" />
				</a>
				<a href="https://docs.github.com/en/rest">GitHub Docs</a>
			</GitHubDocsContainer>
		</TopContainer>
	);
}

const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	color: ${(props) => props?.theme?.colors?.sideMenuTextMain};
	font-size: 10px;
	padding: 15px 5px 0 5px;
`;

const GitHubDocsContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 80%;
	font-size: 16px;
	margin-top: 10px;

	.icon {
		min-width: 32px;
		color: rgba(255, 255, 255, 1);
		font-size: 32px;
		margin-right: 8px;
	}
`;
