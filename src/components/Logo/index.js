import styled from "styled-components";
import logoSemloganSrc from "../../assets/images/logo-sem-slogan.png";
import logoComloganSrc from "../../assets/images/logo.png";

const Img = styled.img`
  margin: auto;
  max-width: ${props => props.$maxWidth || '80%'};
  opacity: ${props => props.$opacity || '100%'};
`;

function Logo({ logan, maxWidth, opacity }) {
  return (
    <Img src={logan ? logoComloganSrc : logoSemloganSrc} $maxWidth={maxWidth} $opacity={opacity} alt="Logo Colabore" />
  )
}

export default Logo;