import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Pagehome from './components/pages/Pagehome'
import Carrinho from './components/pages/Carrinho'
import CadastrarJob from './components/pages/CadastrarJobs/CadastrarJob'


class App extends Component {
  state = {
    paginaAtual: "Pagehome"
  }

  trocarTela = () => {
    switch (this.state.paginaAtual) {
      case "Pagehome":
        return <Pagehome irParaCarrinho={this.irParaCarrinho} />
      case "Carrinho":
        return <Carrinho irParaHome={this.irParaHome} />
    }
  }

  irParaHome = () => {
    this.setState({
      paginaAtual: "Pagehome"
    })
  }
  irParaCarrinho = () => {
    this.setState({
      paginaAtual: "Carrinho"
    })

  }
  render() {
    return (
      <div>
        {this.trocarTela()}
        <CadastrarJob/>
      </div>
    )
  }
}

export default App;