import React, { Component } from 'react';

export default class Botaojogar extends Component {
    
    resultadopartida(event){
        event.preventDefault();

        switch(this.props.valor_card_jogador){
            case 1:
                if(this.props.valor_card_cpu === 1){
                    this.props.mostrarCard();
                    this.props.m_mensagem(2);
                    this.props.pontuarE();
                }
                
                else if(this.props.valor_card_cpu === 2){
                    this.props.mostrarCard();
                    this.props.m_mensagem(3);
                    this.props.pontuarD();
                }
                
                else if(this.props.valor_card_cpu === 3){
                    this.props.mostrarCard();
                    this.props.m_mensagem(1);
                    this.props.pontuarV();
                }    
            break;
            
            case 2:
                if(this.props.valor_card_cpu === 1){
                    this.props.mostrarCard();
                    this.props.m_mensagem(1);
                    this.props.pontuarV();
                }
                
                else if(this.props.valor_card_cpu === 2){
                    this.props.mostrarCard();
                    this.props.m_mensagem(2);
                    this.props.pontuarE();
                }
                
                else if(this.props.valor_card_cpu === 3){
                    this.props.mostrarCard();
                    this.props.m_mensagem(3);
                    this.props.pontuarD();
                }
            break;

            case 3:
                if(this.props.valor_card_cpu === 1){
                    this.props.mostrarCard();
                    this.props.m_mensagem(3);
                    this.props.pontuarD();
                }

                else if(this.props.valor_card_cpu === 2){
                    this.props.mostrarCard();
                    this.props.m_mensagem(1);
                    this.props.pontuarV();
                }
                    
                else if(this.props.valor_card_cpu === 3){
                    this.props.mostrarCard();
                    this.props.m_mensagem(2);
                    this.props.pontuarE();
                }
                break;

                default:
                    alert("Selecione uma Opção!!")
            }
        }

    render(){
        return(
            <div>
                <hr></hr>
                <button type="button" class="btn btn-primary" onClick={this.resultadopartida.bind(this)}>Jogar</button>
            </div>
        );
    }
}