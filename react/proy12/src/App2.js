import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      dias: ['Lunes','Miercoles']
    }
    this.cambioDia = this.cambioDia.bind(this);
  }
  render() {
    return (
      <div>
        <p><select value={this.state.dias} onChange={this.cambioDia}>
        <opcion>Lunes</opcion>
        <option>Martes</option>
        <option>Miércoles</option>
        <option>Jueves</option>
        <option>Viernes</option>
        <option>Sábado</option>
        <option>Domingo</option>
        </select></p>
        Día seleccionado:{this.state.dias.map((elemento) => {
          return(<p>{elemento}</p>)
        }
        )}
      </div>
    );
  }

  cambioDia(e) {
    const opciones = e.target.options;
    const seleccionadas = [];
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected) {
        seleccionadas.push(opciones[i].value);
      }      
    } 
    this.setState({
      dias: seleccionadas
    })
  }
}

export default App;
