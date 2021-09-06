import React, { Component } from 'react' 
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            texto: '',
        }
        this.cambioTexto = this.cambioTexto.bind(this);
    }

    render(){
        return(
            <div>
                <p><textarea value={this.state.texto} onChange={this.cambioTexto} cols="100" rowa="5"></textarea></p>
                <p>cantidad de caracteres ingresados: {this.state.texto.length}</p>
            </div>
        );
    }

    cambioTexto(e){
        this.setState({
            texto: e.target.value,
        })
    }
}

export default App;