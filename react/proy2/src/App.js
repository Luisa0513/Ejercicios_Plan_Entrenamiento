import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    const buscadores=['http://www.google.com',
    'http://www.bing.com',
    'http://www.yahoo.com'];
    const siglo=21;
    const persona= {
      nombre: 'Juan',
      edad: 34
    }
    return(
      <div>
        {this.mostrarTitulo('Hola Mundo')}
        {this.mostrarTitulo('Fin')}
        <a href={buscadores[0]}>Google</a><br />
        <a href={buscadores[1]}>Bing</a><br />
        <a href={buscadores[2]}>Yahoo</a><br />
        <h1>Titulo de nivel 1</h1>
        <hr />
        <p>Estamos en el siglo {siglo}</p>
        <h3>Acceso a un objeto</h3>
        <p>{persona.nombre} tiene {persona.edad} años</p>
        <h3>Llamada a un metodo</h3>
        <p>Un valor aleatorio llamando a un metodo</p>
        {this.retornarAleatorio()}
        <h3>calculo inmediato de expreciones</h3>
        3 + 3 = {3+3}
      </div>
    );
  }

  mostrarTitulo(tit){
    return(<h1>
      {tit}
    </h1>)
  }
  
  retornarAleatorio(){
    return Math.trunc(Math.random() * 10);
  }
}

export default App;
