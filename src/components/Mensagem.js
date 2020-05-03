import React, { Component } from 'react';

export default class Mensagem extends Component {
    render(){
        return(
        <div class="alert alert-secondary col-12 text-center" role="alert">
            <h4>{this.props.mensagemJ}</h4>
        </div>
        )}
}