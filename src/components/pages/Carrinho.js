import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header/Header'

const BotaoHome = styled.button`
  background-color: #7165BF;
  color: white;
  font-size: medium;
  border-radius: 30px;
  width: 20%;
  padding: 8px;
  margin: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  :hover {
  background-color: #A8A0D9;
  }
`

const AreaToda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`

export default class carrinho extends Component {
  render() {
    return (
      <AreaToda>
        <p>Aqui é o carrinho</p>
        <BotaoHome onClick={this.props.irParaHome}>Voltar para home</BotaoHome >
      </AreaToda>
    )
  }
}
