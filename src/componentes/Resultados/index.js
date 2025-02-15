import styled from "styled-components";
import imgDefault from "../../imagens/livro.png"

const Livro = styled.div`
display: flex;
flex-direction: column-reverse;
justify-content: center;
align-items: center;
margin: 20px 0;
cursor: pointer;
text-align: center;
padding: 20px 100px;
p {
    width: 200px;
    color: #FFF;
}
img {
    width: 100px;
}
&:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}
`

function Resultados({livros, acao}) {
    return (
        <main>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap-reverse'}}>
            { livros.map ((livroFiltrado, index) => 
                <Livro key={livroFiltrado.nome + index} onClick={() => acao(livroFiltrado.id)}>
                    <p>{livroFiltrado.nome}</p>
                    <img  src={livroFiltrado.src ? livroFiltrado.src : imgDefault} alt='livro'/>
                </Livro>
            )}
            </div>
        </main>
    )
}

export default Resultados;