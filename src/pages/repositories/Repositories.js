import Title from "../../components/Title";
import { PageContainer, Content } from "../../assets/styles/PageStyle";

import RepositoriesInfos from "./RepositoriesInfos";
import { useParams } from "react-router-dom";

export default function Repositories() {

    const { userName } = useParams();

    return (
        <PageContainer>
            <Content>
                <Title content={userName && "Repositórios do " + userName.substring(0, 30)} />
                <RepositoriesInfos userName={userName} />
            </Content>
        </PageContainer>
    );
}
