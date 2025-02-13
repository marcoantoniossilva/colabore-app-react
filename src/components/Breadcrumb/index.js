import styled from 'styled-components';
import SpanIconSection from '../SpanIconSection';

const BreadcrumbContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BreadcrumbItem = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem;
`;

export const BreadcrumbLabelSection = styled.label`
    margin-left: ${props => props.$marginLeft || '1rem'};
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
`;

function Breadcrumb({ text, onClickBack }) {
    return (
        <BreadcrumbContainer>
            <BreadcrumbItem>
                <SpanIconSection cursor='pointer' onClick={onClickBack} $lineHeight='2.25rem' icon='arrow_back' />
                <BreadcrumbLabelSection>{text}</BreadcrumbLabelSection>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <SpanIconSection $lineHeight='2.25rem' icon='bookmark' />
                <SpanIconSection $lineHeight='2.25rem' icon='more_vert' marginleft='1rem' />
            </BreadcrumbItem>
        </BreadcrumbContainer>
    )
}

export default Breadcrumb;