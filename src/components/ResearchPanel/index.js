import styled from 'styled-components';
import Breadcrumb from '../Breadcrumb';
import ResearchInfo from '../ResearchInfo';
import { BreadcrumbLabelSection } from '../Breadcrumb'
import SpanIconSection from '../SpanIconSection';
import OthersResearchs from '../OthersResearchs'
import ContentSection from "../ContentSection";

const OthersResearchsTitle = styled.div`
    display: 'none';
    @media (min-width: 1024px) {
        display: 'flex'
    }
`;

function ResearchPanel({ researchId, othersResearchs }) {
    return (
        <ContentSection>
            <Breadcrumb text='Menu Principal' onClickBack={() => (window.location.href = "/principal")} />
            <ResearchInfo researchId={researchId} />
            <OthersResearchsTitle>
                <div style={{ display: "flex", alignItems: "center", marginLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                    <BreadcrumbLabelSection $marginLeft='0rem'>Outras Pesquisas Ativas</BreadcrumbLabelSection>
                    <SpanIconSection $lineHeight='2.25rem' icon='arrow_forward' />
                </div>
            </OthersResearchsTitle>
            <OthersResearchs othersResearchs={othersResearchs} />
        </ContentSection>
    )
}

export default ResearchPanel;