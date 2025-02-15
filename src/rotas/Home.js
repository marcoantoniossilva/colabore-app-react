import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from "../componentes/UltimosLancamentos";

import CardRecomenda from '../componentes/CardRecomenda';
import imagemLivro from '../imagens/livro3.png'

const AppContainer = styled.div `
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
      <CardRecomenda 
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </AppContainer>
  );
}

export default Home;
