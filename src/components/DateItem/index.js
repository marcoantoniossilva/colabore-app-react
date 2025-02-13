import styled from 'styled-components';
import SpanIconSection from '../SpanIconSection';

const DateItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

function DateItem({ icon, text }) {
    return (
        <DateItemContainer>
            <SpanIconSection $lineHeight='2.25rem' icon={icon} />
            <label style={{ fontSize: "1.125rem", marginLeft: "0.5rem" }}>{text}</label>
        </DateItemContainer>
    )
}

export default DateItem;