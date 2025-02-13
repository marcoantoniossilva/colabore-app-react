import styled from "styled-components";

const Title = styled.h1`
    color: ${props => props.color || '#4a5568'};
    font-size: ${props => props.$fontSize || '36px'};
    text-align: ${props => props.align || 'center'};
    width: 100%;
`

export default Title;