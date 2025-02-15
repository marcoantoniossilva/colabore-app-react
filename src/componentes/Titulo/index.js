import styled from "styled-components";

const Titulo = styled.h2`
    color: ${props => props.$cor || '#EB9B00'};
    font-size: ${props => props.$tamanhoFonte || '36px'};
    text-align: ${props => props.$alinhamento || 'center'};
    width: 100%;
`

export default Titulo;