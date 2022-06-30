import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "./theme"
import Pagehome from './components/pages/Pagehome'
import Carrinho from './components/pages/Carrinho'
import ListaJobs from './components/pages/ContratarJobs/ListaJobs'
import Cadastrar from './components/pages/Cadastro/Cadastrar'

class App extends React.Component {
  state = {
    paginaAtual: "Pagehome"
  }

  trocarTela = () => {
    switch (this.state.paginaAtual) {
      case "Pagehome":
        return <Pagehome irParaCarrinho={this.irParaCarrinho} irParaCadastroNinja={this.irParaCadastroNinja} irParaServicos={this.irParaServicos} />
      case "Carrinho":
        return <Carrinho irParaHome={this.irParaHome} />
      case "ListaJobs":
        return <ListaJobs irParaHome={this.irParaHome} />
      case "Cadastrar":
        return <Cadastrar irParaHome={this.irParaHome} />
      default:
        return <Pagehome irParaCarrinho={this.irParaCarrinho} />
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

  irParaCadastroNinja = () => {
    this.setState({
      paginaAtual: "ListaJobs"
    })
  }
  irParaServicos = () => {
    this.setState({
      paginaAtual: "Cadastrar"
    })
  }

  render() {
    return (
      <ChakraProvider theme={theme}>
          {this.trocarTela()}
      </ChakraProvider>
    )
  }
}

export default App; 