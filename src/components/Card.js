import React, { Component } from 'react';
import CardCss from './css/Card.css';

export default class Card extends Component {
    render(){
        return(
            <div class="text-center">
                <img src={this.props.img} class="img-fluid" alt="Responsive image"></img>
            </div>
        );
    }
}