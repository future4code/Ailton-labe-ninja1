import axios from 'axios'
import React, { Component } from 'react'
import ListaJobs from './ListaJobs'
import TelaCadastrar from './TelaCadastrar'
import styled from 'styled-components'
import img from '../../../components/images/banner.jpg'
import image from '../../../components/images/logoninjas.png'

const AreaTotal = styled.div`
 height: 100vh;
 background-color: #5710B3;
 position: relative;
`
const AreaCadastro = styled.div`
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AreaCars = styled.div`
      position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    background-color: #F5F4FB;
    width: 500px;
    height: 500px;
    border-radius: 30px;
    text-align: center;
`

const EstiloBotoes = styled.button`
  background-color: #7165BF;
  color: white;
  font-size: medium;
  border-radius: 30px;
  width: 90%;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  :hover {
  background-color: #A8A0D9;
  }
`

const FotoNinja = styled.img`
  width: 400px;
  border-radius: 30px;
  margin-top: 16px;
  

  
`

export default class CadastrarJob extends Component {
  state = {
    clicou: false,
    verJobs: false
  }


  irParaTelaCadastrar = () => {
    this.setState({
      clicou: !this.state.clicou 
     
    })
  }
  irParaListaJobs = () => {
    this.setState({
      verJobs: !this.state.verJobs
    })
  }

  render() {
  
    return (
      <div>
        <AreaTotal>
          <AreaCadastro>
            <AreaCars>
            
              {this.state.clicou ? <TelaCadastrar /> : ""}
              <FotoNinja src={image}></FotoNinja>
              <EstiloBotoes onClick={this.irParaTelaCadastrar}>Faça parte do time de ninjas</EstiloBotoes>
              
              <EstiloBotoes onClick={this.irParaListaJobs}>Contrate um ninja</EstiloBotoes>
              {this.state.verJobs ? <ListaJobs /> : ""}
             
            
            </AreaCars>
          </AreaCadastro>
        </AreaTotal>
      </div>
    )
  }
}

