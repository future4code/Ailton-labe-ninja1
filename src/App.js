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

  trocarTela = () => {
    switch (this.state.paginaAtual) {
      case "Pagehome":
        return <Pagehome trocarPagina={this.trocarPagina} />
      case "Carrinho":
        return <Carrinho trocarPagina={this.trocarPagina} verDetalhes={this.verDetalhes}/>
      case "ListaJobs":
        return <ListaJobs verDetalhes={this.verDetalhes}/>
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