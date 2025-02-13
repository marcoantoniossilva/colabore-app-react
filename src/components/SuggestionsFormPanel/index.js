import Breadcrumb from '../Breadcrumb';
import ContentSection from "../ContentSection";
import SuggestionsFormSection from '../SuggestionsFormSection';

function SuggestionsFormPanel() {
    return (
        <ContentSection>
            <Breadcrumb text='Voltar' onClickBack={() => (window.location.href = "/principal")} />
            <SuggestionsFormSection />
        </ContentSection>
    )
}

export default SuggestionsFormPanel;