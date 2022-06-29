import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Head = styled.div`
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
const AreaP = styled.div`
  display: flex;
  p {
    margin: 10px;
    cursor: pointer;
    :hover {
      color: #5710B3;
    }
  }
`

export default class Pagehome extends Component {
  render() {
    return (
      <div>
      <header>
        <Head>
        <h1>Labeninjas</h1>
        <AreaP>
        <p onClick={this.props.irParaHome}>Home</p>
        <p onClick={this.props.irParaCarrinho}> Carrinho</p>
        </AreaP>
        </Head>
        </header>
      </div>
    )
  }
}
