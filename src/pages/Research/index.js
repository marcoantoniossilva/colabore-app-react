import Menu from "../../components/Menu";
import ResearchPanel from "../../components/ResearchPanel";
import ContentContainer from "../../components/ContentContainer";
import MainContentContainer from "../../components/MainContentContainer";

function Research() {
    return (
        <ContentContainer>
            <MainContentContainer>
                <Menu />
                <ResearchPanel researchId={1} othersResearchs={[2, 3, 4]} />
            </MainContentContainer>
        </ContentContainer>
    )
}

export default Research;