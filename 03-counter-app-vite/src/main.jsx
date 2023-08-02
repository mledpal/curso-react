/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom/client';

// import { FirstApp } from './FirstApp';
// import { App } from './HelloWorldApp';
import { CounterApp } from './CounterApp';

import './index.css';

const saludo = {
    titulo : 'Este es el titulo',
    subtitulo : 'Este es el subtitulo',
    nombre : 'Miguel Ledesma'
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>        
        {/* <FirstApp titulo = {saludo.titulo} subtitulo = {saludo.subtitulo} nombre = {saludo.nombre} /> */}
        <CounterApp value = { 0 }/> 
    </React.StrictMode>
)