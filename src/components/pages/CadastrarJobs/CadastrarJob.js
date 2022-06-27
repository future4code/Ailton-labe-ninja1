import axios from 'axios'
import React, { Component } from 'react'
import TelaCadastrar from './TelaCadastrar'

export default class CadastrarJob extends Component {
  state = {
    clicou: false,
    verJobs: []
  }

  componentDidMount() {
    this.mostrarJobs()
  }

irParaTelaCadastrar = () => {
  this.setState({
  clicou: !this.state.clicou
  })
}

mostrarJobs = () => {
  axios.get('https://labeninjas.herokuapp.com/jobs', {
    headers: {
      Authorization: "30167c40-cd85-49b4-96f6-7d20b939127f"
    }
  }).then ((response) => {
    this.setState({verJobs: response.data})
  }).catch ((err) => {
    console.log(err.message)
  })
}
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
        {this.state.clicou ? <TelaCadastrar /> : "" }
        <button onClick={this.irParaTelaCadastrar}>Criar job</button>
        <button onClick={this.mostrarJobs}>Ver jobs</button>
        {/* {listaJobs} */}
      </div>
    )
  }
}

