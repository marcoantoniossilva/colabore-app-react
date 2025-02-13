import styled from "styled-components";

const ButtonContainer = styled.button`
    font-weight: bold;
    color: white;
    background-color: var(--roxo-escuro);
    width: ${props => props.$width || '100%'};
    padding: 0.5rem 0;
    border: none;
    border-radius: 9999px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    margin-top: ${props => props.$marginTop || '0.5rem'};
    margin-inline: ${props => props.$marginInline || '0rem'};
    cursor: ${props => props.$cursor || 'pointer'};
`;

function FormButton({ text, onClick, cursor, marginTop, marginInline, width, type }) {
    return (
        <ButtonContainer type={type || "button"} onClick={onClick} $marginTop={marginTop} $marginInline={marginInline} $cursor={cursor} $width={width}>{text}</ButtonContainer>
    )
}

export default FormButton;