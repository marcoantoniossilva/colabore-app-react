import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './rotas/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './componentes/Header'
import Favoritos from './rotas/Favoritos';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  li {
    list-style: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/favoritos' element={<Favoritos/>}/>
        <Route path='/categorias' element={<p>Oi categorias</p>}/>
        <Route path='/minha_estante' element={<p>Oi minha_estante</p>}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
