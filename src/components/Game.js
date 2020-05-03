import React, { Component } from 'react';

import Card from './Card';
import Placar from './Placar';
import BotaoJogar from './BotaoJogar';
import Mensagem from './Mensagem';
import Menu from './Menu';

import imgCardPedra from '../imgPedra.png';
import imgCard from '../imgInterrogacao.png';
import imgCardPapel from '../imgPapel.png';
import imgCardTesoura from '../imgTesoura.png';
import imgVs from '../imgVs.png';

export default class Game extends Component {
    constructor(){
        super();
        this.state = {
            p_vitoria: 0,
            p_empate: 0,
            p_derrota: 0,

            valorCPU: Math.floor(Math.random() * 3) + 1,
            valorJogador: 0,
            cardCPU: imgCard,
            
            nomeCardJogador: "???",
            nomeCardCPU: "???",
            mensagem: "???",
        }
    }

    //Métodos---------------------------------------
        pontuarVitoria(){
            this.setState({
                p_vitoria: this.state.p_vitoria + 1,
            });

            this.novaPartida()
        }

        pontuarEmpate(){
            this.setState({
                p_empate: this.state.p_empate + 1,
            });

            this.novaPartida()
        }

        pontuarDerrota(){
            this.setState({
                p_derrota: this.state.p_derrota + 1,
            });

            this.novaPartida()
        }

        mostrarCardCPU(){
            if(this.state.valorCPU === 1){
                this.setState({
                    cardCPU: imgCardPedra,
                    nomeCardCPU: "Pedra",
                });
            }

            else if(this.state.valorCPU === 2){
                    this.setState({
                        cardCPU: imgCardPapel,
                        nomeCardCPU: "Papel",
                    });
                }
                
                else{
                    this.setState({
                        cardCPU: imgCardTesoura,
                        nomeCardCPU: "Tesoura",
                    });
                }
        }

        mudarMensagem(opt){
            if(opt === 1){
                this.setState({
                    mensagem: "Você Venceu!!"
                });
            }else if(opt === 2){
                this.setState({
                    mensagem: "Empate!!"
                });
            }else{
                this.setState({
                    mensagem: "Você Perdeu!!"
                });
            }
        }

        novaPartida(){
            this.setState({
               valorJogador: 0,
               valorCPU: Math.floor(Math.random() * 3) + 1 ,
            });

            document.getElementById("card01").style.border  = '1px solid #E6E6FA';
            document.getElementById("card02").style.border  = '1px solid #E6E6FA';
            document.getElementById("card03").style.border  = '1px solid #E6E6FA';
        }

        selecionarCard(opt){
            switch(opt){
                case 1:
                    this.setState({ valorJogador: 1, nomeCardJogador: "Pedra", nomeCardCPU: "???", cardCPU: imgCard, mensagem: "???"});
                    document.getElementById("card01").style.border  = "3px solid #0000ff";
                    
                    document.getElementById("card02").style.border  = '1px solid #E6E6FA';
                    document.getElementById("card03").style.border  = '1px solid #E6E6FA';
                break;
                
                case 2:
                    this.setState({ valorJogador: 2, nomeCardJogador: "Papel", nomeCardCPU: "???", cardCPU: imgCard, mensagem: "???"});
                    document.getElementById("card01").style.border  = '1px solid #E6E6FA';
                    
                    document.getElementById("card02").style.border  = "3px solid #0000ff";
                    document.getElementById("card03").style.border  = '1px solid #E6E6FA';
                break;

                case 3:
                    this.setState({ valorJogador: 3, nomeCardJogador: "Tesoura", nomeCardCPU: "???", cardCPU: imgCard, mensagem: "???" });
                    document.getElementById("card01").style.border  = '1px solid #E6E6FA';
                    
                    document.getElementById("card02").style.border  = '1px solid #E6E6FA';
                    document.getElementById("card03").style.border  = "3px solid #0000ff";
                break;
            }
        }

    render(){
        return(
            <div class="container-fluid">
                <Menu />

                <div class="row text-center" id="tabuleiro">
                    <div class="col-3" id="placar">

                        <Placar vitoria = {this.state.p_vitoria}
                                empate = {this.state.p_empate}
                                derrota = {this.state.p_derrota}/>

                        <BotaoJogar valor_card_jogador={this.state.valorJogador}
                                    valor_card_cpu={this.state.valorCPU}
                                    
                                    pontuarV={this.pontuarVitoria.bind(this)}
                                    pontuarE={this.pontuarEmpate.bind(this)}
                                    pontuarD={this.pontuarDerrota.bind(this)}
                                    mostrarCard={this.mostrarCardCPU.bind(this)}
                                    m_mensagem={this.mudarMensagem.bind(this)}/>
                    </div>

                    <div class="col-2" id="card01" onClick={this.selecionarCard.bind(this,1)}>
                        <Card card="Pedra" img={imgCardPedra}/>
                    </div>

                    <div class="col-2" id="card02" onClick={this.selecionarCard.bind(this,2)}>
                        <Card card="Papael" img={imgCardPapel}/>
                    </div>

                    <div class="col-2" id="card03" onClick={this.selecionarCard.bind(this,3)}>
                        <Card card="Tesoura" img={imgCardTesoura}/>
                    </div>

                    <div class="col-1 text-center" id="imgVs">
                        <img src={imgVs} class="img-fluid" alt="Responsive image"></img>
                    </div>

                    <div class="col-2" id="card04">
                        <Card card="card" img={this.state.cardCPU}/>
                    </div>
                </div>

                <hr></hr>
                
                <div class="row">
                   <Mensagem mensagemJ={this.state.mensagem}
                             nome_card_jogador={this.state.nomeCardJogador}
                             nome_card_cpu={this.state.nomeCardCPU}/>
                </div>
            </div>
        );
        }
    }