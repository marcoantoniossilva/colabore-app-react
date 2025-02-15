import styled from "styled-components";
import Titulo from "../Titulo";
import Subtitulo from "../Subtitulo";
import Input from "../Input";
import { useEffect, useState } from "react";
import Resultados from "../Resultados";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%,
    #326589);
    text-align: center;
    padding: 85px 0;
    width: 100%;
`

function Pesquisa() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    const [livros, setLivros] = useState([]);
    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livrosDaApi = await getLivros();
        setLivros(livrosDaApi);
    };

    function filterLivros(evento) {
        const textoDigitado = evento.target.value;
        const resultadoPesquisa = livros ? livros.filter(livro => textoDigitado !== '' && livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())) : [];
        setLivrosPesquisados(resultadoPesquisa);
    }

    const insertFavorito = async (id) => {
        try {
            await postFavorito(id);
            alert(`Livro de id: ${id} inserido!`);
        }  catch(error) {
            alert(`Livro de id: ${id} já existe nos favoritos!`);
        }
    }

    return (
        <PesquisaContainer>
            <Titulo $cor="#FFF">Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu produto.</Subtitulo>
            <Input placeholder='Digite aqui' onChange={evento => filterLivros(evento)} />
            <Resultados livros={livrosPesquisados} acao={insertFavorito}/>
        </PesquisaContainer>
    )
}

export default Pesquisa;