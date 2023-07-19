"use strict";

const divRoot = document.getElementById("root");
const nombre = 'Miguel';
const h1Tag = <h1>Hola, soy {nombre}</h1>


ReactDOM.render(h1Tag, divRoot);