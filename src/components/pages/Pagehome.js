import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default class Pagehome extends Component {
  render() {
    return (
      <div>
        <h1>labeninja</h1>
        <button onClick={this.props.irParaHome}>Ir para home</button>
        <button onClick={this.props.irParaCarrinho}>Ir para carrinho</button>
        <hr/>
      </div>
    )
  }
}
