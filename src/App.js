import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "./theme"
import Header from './components/pages/Header/Header'
import Footer2 from './components/pages/Footer/Footer'
import Pagehome from './components/pages/Pagehome'
import Carrinho from './components/pages/Carrinho'
import ListaJobs from './components/pages/ContratarJobs/ListaJobs'
import Cadastrar from './components/pages/Cadastro/Cadastrar'
import JobDetails from './components/pages/ContratarJobs/JobDetails'

class App extends React.Component {
  state = {
    paginaAtual: "Pagehome",
    jobIdDetails: "",
    carrinho: []
  }

  trocarPagina = (pagina) => {
    this.setState({
      paginaAtual: pagina
    })
  }

  verDetalhes = (jobId) => {
    this.setState({
      paginaAtual: "Detalhar", jobIdDetails: jobId
    })
  }

  addCarrinho = (job) => {
    const carrinhoCheio = [...this.state.carrinho, job]
    this.setState({carrinho: carrinhoCheio})
    alert(`Serviço adicionado ao carrinho`)
  }

  esvaziarItem = (id) => {
    const canDelete = window.confirm("Deseja remover esse item do carrinho?")
    if (canDelete){
      const carrinhoVazio = this.state.carrinho.filter((item) => {
        return item.id !== id
      })
      this.setState({carrinho: carrinhoVazio})
    }
  }

  esvaziarCarrinho = () => {
    this.setState({carrinho: []})
    alert("Serviço comprado!")
  }

  trocarTela = () => {
    switch (this.state.paginaAtual) {
      case "Pagehome":
        return <Pagehome trocarPagina={this.trocarPagina} />
      case "Carrinho":
        return <Carrinho carrinho={this.state.carrinho} trocarPagina={this.trocarPagina} esvaziarItem={this.esvaziarItem} esvaziarCarrinho={this.esvaziarCarrinho}/>
      case "ListaJobs":
        return <ListaJobs verDetalhes={this.verDetalhes} addCarrinho={this.addCarrinho}/>
      case "Cadastrar":
        return <Cadastrar />
        case "Detalhar":
          return <JobDetails trocarPagina={this.trocarPagina} jobId={this.state.jobIdDetails} />
      default:
        return <Pagehome trocarPagina={this.trocarPagina} />
    }
  }

  render() {
    return (
      <ChakraProvider theme={theme}>
        <Header trocarPagina={this.trocarPagina} />
          {this.trocarTela()}
        <Footer2 />
      </ChakraProvider>
    )
  }
}

export default App; 