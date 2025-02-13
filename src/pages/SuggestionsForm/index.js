import Menu from "../../components/Menu";
import ContentContainer from "../../components/ContentContainer";
import MainContentContainer from "../../components/MainContentContainer";
import SuggestionsFormPanel from "../../components/SuggestionsFormPanel";

function SuggestionsForm() {
    return (
        <ContentContainer>
            <MainContentContainer>
                <Menu />
                <SuggestionsFormPanel />
            </MainContentContainer>
        </ContentContainer>
    )
}

export default SuggestionsForm;