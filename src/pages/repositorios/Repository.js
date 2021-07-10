import styled from "styled-components";

export default function Repository({ name, description, url }) {
	return (
		<RepositoryContainer>
			<a href={url}>
				<strong>{name}</strong>
				<p>{description?.length >= 90 ? description.substring(0, 95) + "..." : description}</p>
			</a>
		</RepositoryContainer>
	);
}

const RepositoryContainer = styled.div`
	width: 100%;
	height: 100px;
	margin: 10px;
	border: 1px solid rgb(224, 224, 224);
	box-shadow: 4px 4px 8px 1px ${(props) => props?.theme?.colors?.textMain};
	padding: 10px;
	overflow-y: hidden;

	p {
		margin-top: 10px;
	}

	a {
		display: block;
		width: 100%;
	}
`;
