import axios from 'axios'
import React, { Component } from 'react'
import ListaJobs from './ListaJobs'
import TelaCadastrar from './TelaCadastrar'

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
        {this.state.clicou ? <TelaCadastrar /> : "" }
        <button onClick={this.irParaTelaCadastrar}>Criar job</button>
       
        <button onClick={this.irParaListaJobs}>Ver jobs</button>
        {this.state.verJobs ? <ListaJobs/> : ""}
        {/* {listaJobs} */}
      </div>
    )
  }
}

