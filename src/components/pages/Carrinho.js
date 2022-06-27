import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default class carrinho extends Component {
  render() {
    return (
      <div>
        carrinho
      <button onClick={this.props.irParaHome}>Voltar para home</button>
      </div>
    )
  }
}
