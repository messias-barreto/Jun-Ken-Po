import React, { Component } from 'react';

export default class Placar extends Component {
    render(){
        return(
        <div>    
            <div class="card-header">
                    Placar
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">Vitoria: {this.props.vitoria}</li>
                <li class="list-group-item">Empate: {this.props.empate}</li>
                <li class="list-group-item">Derrota: {this.props.derrota}</li>
            </ul>
        </div>
    );
    }
}