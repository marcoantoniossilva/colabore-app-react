import styled from 'styled-components';
import { useEffect, useState } from "react";
import { getFavoritos } from '../servicos/favoritos';
import Resultados from '../componentes/Resultados';
import Titulo from '../componentes/Titulo'
import { deleteFavorito } from '../servicos/favoritos';

const AppContainer = styled.div `
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function Favoritos() {

  const [favoritos, setFavoritos] = useState([]);
    useEffect(() => {
        fetchFavoritos();
    }, []);

    async function fetchFavoritos() {
        const favoritosDaApi = await getFavoritos();
        setFavoritos(favoritosDaApi);
    };

    const deletarFavorito = async (id) => {

      if(window.confirm(`Deseja realmente remover o livro de ${id}?`)){
        await deleteFavorito(id);
        fetchFavoritos();
        alert(`Livro de id: ${id} deletado!`);
      }
  }

  return (
    <AppContainer>
      <Titulo $cor='#FFF'>Aqui estão seus livros favoritos</Titulo>
      <Resultados livros={favoritos} acao={deletarFavorito}/>
    </AppContainer>
  );
}

export default Favoritos;
