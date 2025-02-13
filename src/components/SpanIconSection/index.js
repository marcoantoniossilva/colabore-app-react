import styled from 'styled-components';

const SpanSection = styled.span`
    font-family: "Material Symbols Outlined";
    font-size: ${props => props.$fontSize || '1.875rem'};
    line-height: ${props => props.$lineHeight || '2.25rem'};
    margin-left: ${props => props.$marginLeft || '0rem'};
    cursor: ${props => props.$cursor || 'auto'};
`;

function SpanIconSection({ icon, onClick, fontsize, cursor, lineheight, marginleft }) {
    return (
        <SpanSection onClick={onClick} $cursor={cursor} $fontSize={fontsize} $lineHeight={lineheight} $marginLeft={marginleft}>{icon}</SpanSection>
    )
}

export default SpanIconSection;