import styled from "styled-components";
import Titulo from "../Titulo/index.js";
import { livros } from "./dadosUltimosLancamentos.js";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return (
        <UltimosLancamentosContainer>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map((livro, index) => <img key={livro + index} src={livro.src} alt={livro.nome}/>)}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;