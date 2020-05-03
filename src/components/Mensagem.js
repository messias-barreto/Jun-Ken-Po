import React, { Component } from 'react';

export default class Mensagem extends Component {
    render(){
        return(
        <div class="alert alert-secondary col-12 text-center" role="alert">
            <h3>Resultado: {this.props.mensagemJ}</h3>
            <hr></hr>
            <p>Jogador: {this.props.nome_card_jogador} </p> 
            <p>CPU: {this.props.nome_card_cpu}</p>
            
        </div>
        )}
}