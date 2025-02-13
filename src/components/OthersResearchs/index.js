import styled from 'styled-components';
import OthersResearchsItem from '../OthersResearchsItem'

const OthersResearchsPanel = styled.div`
    margin-bottom: 1.5rem;
    display: none;
    @media (min-width: 1024px) {
        display: block;
    }
`;

function OthersResearchs({ othersResearchs }) {
    return (
        <OthersResearchsPanel>
            {othersResearchs.map((researchId) => <OthersResearchsItem key={researchId} researchId={String(researchId)} />)}
        </OthersResearchsPanel>
    )
}

export default OthersResearchs;