import Menu from "../../components/Menu";
import ContentContainer from "../../components/ContentContainer";
import MainContentContainer from "../../components/MainContentContainer";
import MainPanel from "../../components/MainPanel";

function Main() {
    return (
        <ContentContainer>
            <MainContentContainer>
                <Menu />
                <MainPanel />
            </MainContentContainer>
        </ContentContainer>
    )
}

export default Main;