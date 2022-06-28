import axios from 'axios'
import React, { Component } from 'react'
import ListaJobs from './ListaJobs'
import TelaCadastrar from './TelaCadastrar'
import styled from 'styled-components'
import img from '../../../components/images/banner.jpg'

const AreaTotal = styled.div`
 height: 100vh;
 background-color: #5710B3;
 position: relative;
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
    background-color: aquamarine;
    width: 800px;
    height: 800px;
    border-radius: 30px;
`

export default class CadastrarJob extends Component {
  state = {
    clicou: false,
    verJobs: false
  }

  // componentDidMount() {
  //   this.mostrarJobs()
  // }

  irParaTelaCadastrar = () => {
    this.setState({
      clicou: !this.state.clicou
    })
  }
  irParaListaJobs = () => {
    this.setState({
      verJobs: !this.state.verJobs
    })
  }

  // mostrarJobs = () => {
  //   axios.get('https://labeninjas.herokuapp.com/jobs', {
  //     headers: {
  //       Authorization: "30167c40-cd85-49b4-96f6-7d20b939127f"
  //     }
  //   }).then ((response) => {
  //     this.setState({verJobs: response.data.jobs})
  //   }).catch ((err) => {
  //     console.log(err.message)
  //   })
  // }
  render() {
    // const listaJobs = this.state.verJobs.map((job) => {
    //   return (
    //     <div key={job.id}>
    //       {job.title}
    //     </div>
    //   )
    // })

    return (
      <div>
        <AreaTotal>
          <AreaCadastro>
            <AreaCars>
              {this.state.clicou ? <TelaCadastrar /> : ""}
              <button onClick={this.irParaTelaCadastrar}>Criar job</button>

              <button onClick={this.irParaListaJobs}>Ver jobs</button>
              {this.state.verJobs ? <ListaJobs /> : ""}
              {/* {listaJobs} */}
            </AreaCars>
          </AreaCadastro>
        </AreaTotal>
      </div>
    )
  }
}

