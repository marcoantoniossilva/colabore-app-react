import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola];

const IconesContainer = styled.ul `
  display: flex;
  align-items: center;
`;
const IconeContainer = styled.li `
  margin-right: 40px;
  width: 25px;
`;

function IconesHeader() {
    return (
        <IconesContainer>
          {icones.map((icone) => <IconeContainer key={icone}><img src={icone} alt='icone'/></IconeContainer>)}
        </IconesContainer>
    )
}

export default IconesHeader;