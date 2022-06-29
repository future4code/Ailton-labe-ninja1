import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "./theme"
import Pagehome from './components/pages/Pagehome'
import Carrinho from './components/pages/Carrinho'
import CadastrarJob from './components/pages/CadastrarJobs/CadastrarJob'

class App extends React.Component {
  state = {
    paginaAtual: "Pagehome"
  }

  trocarTela = () => {
    switch (this.state.paginaAtual) {
      case "Pagehome":
        return <Pagehome irParaCarrinho={this.irParaCarrinho} />
      case "Carrinho":
        return <Carrinho irParaHome={this.irParaHome} />
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

  render() {
    return (
      <ChakraProvider theme={theme}>
          {this.trocarTela()}
          <CadastrarJob/>
      </ChakraProvider>
    )
  }
}

export default App;