import styled from 'styled-components';
import SpanIconSection from "../SpanIconSection"

const MenuItemSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.5rem;
`;

const PSection = styled.p`
    font-weight: ${props => props.$fontWeight || 'lighter'};
    text-align: center;
    margin-top: initial;
`;

function MenuItem({ text, icon, onClick, fontWeight }) {
    return (
        <MenuItemSection>
            <SpanIconSection onClick={onClick} icon={icon} cursor='pointer' />
            <PSection $fontWeight={fontWeight}>{text}</PSection>
        </MenuItemSection>
    )
}

export default MenuItem;