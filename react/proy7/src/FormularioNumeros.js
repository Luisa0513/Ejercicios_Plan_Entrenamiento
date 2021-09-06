import React, { Component } from 'react'

class FormularioNumeros extends Component{
    render(){
        return(
            <form onSubmit={this.props.onSumar}>
                <p>ingrese el primer valor: <input type="text" name="valor1"/></p>
                <p>ingrese el segundo valor: <input type="text" name="valor2"/></p>
                <input type="submit" value="Sumar"/>
            </form>
        )
    }
}

export default FormularioNumeros;