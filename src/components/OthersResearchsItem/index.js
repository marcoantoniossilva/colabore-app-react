import styled from 'styled-components';
import researchs from '../../backend/researchs.json';
import { BreadcrumbLabelSection } from '../Breadcrumb';
import { StyledParagraph } from '../ResearchInfo';
import Tag from '../Tag';

const OthersResearchsItemPanel = styled.div`
    display: flex;
    margin-left: 1.5rem;
    height: 100%;
    margin-bottom: 2rem;
`;

function OthersResearchsItem({ researchId }) {
    const research = researchs.find(item => item.id === researchId);
    const imagePath = require(`../../backend/images/${research.imgSrc}`);

    return (
        <OthersResearchsItemPanel>
            <div style={{ width: "16.6667%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img style={{ borderRadius: "0.5rem", width: '100%' }} src={imagePath} alt="Logo Other Research" />
            </div>
            <div style={{ width: "83.3333%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "1.5rem" }}>
                <div style={{ fontFamily: "'Roboto', sans-serif" }}>
                    <BreadcrumbLabelSection $marginLeft='0rem'>{research.name}</BreadcrumbLabelSection>
                    <StyledParagraph>{research.description}</StyledParagraph>
                </div>
                <div style={{ display: "flex", marginTop: "0.5rem", alignItems: "center" }}>
                    <p style={{ fontSize: "1.125rem", lineHeight: "1.75rem", marginBottom: '0px', marginTop: '0px' }}>Tags:</p>
                    {research.tags.map((tag) => <Tag key={tag} tagId={String(tag)} />)}
                </div>
            </div>
        </OthersResearchsItemPanel>
    )
}

export default OthersResearchsItem;