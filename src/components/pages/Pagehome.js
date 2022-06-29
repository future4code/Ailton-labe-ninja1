import React, { Component } from 'react'
import styled from 'styled-components'
import ListaJobs from './ContratarJobs/ListaJobs'
import TelaCadastrar from './Cadastro/Cadastrar'
import img from '../../components/images/banner.jpg'
import image from '../../components/images/logoninjas.png'

const HeaderArea = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    margin: 0 auto;
    height: 90px;
    h1 {
      color: #ccc;
    }
`

const AreaMenu = styled.div`
  display: flex;
  p {
    margin: 10px;
    cursor: pointer;
    :hover {
      color: #510696;
    }
  }
`

const AreaTotal = styled.div`
 height: 100vh;
 background-color: #510696;
 position: relative;
 text-align: center;
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
    text-align: center;
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

const EstiloBotaoNinja = styled.button`
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

const EstiloBotaoServicos = styled.button`
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
  margin-left: 50px;
`

export default class Pagehome extends Component {

  render() {
    return (
      <div>
        <HeaderArea>
        <h1>Labeninjas</h1>
        <AreaMenu>
        <p onClick={this.props.irParaCarrinho}> Carrinho</p>
        </AreaMenu>
        </HeaderArea>

        <AreaTotal>
          <AreaCadastro>
            <AreaCars>
            <FotoNinja src={image}></FotoNinja>

              <EstiloBotaoServicos onClick={this.props.irParaServicos}>Faça parte do time de ninjas</EstiloBotaoServicos>
             
              <EstiloBotaoNinja onClick={this.props.irParaCadastroNinja}>Contrate um ninja</EstiloBotaoNinja>
            </AreaCars>
          </AreaCadastro>
        </AreaTotal>
       
      </div>
    )
  }
}
