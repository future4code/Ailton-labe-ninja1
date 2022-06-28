import React, { Component } from 'react'
import axios from 'axios'
export default class ListaJobs extends Component {
 state = {
    verJobs: []
 }
 componentDidMount() {
    this.mostrarJobs()
  }
   mostrarJobs = () => {
   
        axios.get('https://labeninjas.herokuapp.com/jobs', {
          headers: {
            Authorization: "30167c40-cd85-49b4-96f6-7d20b939127f"
          }
        }).then ((response) => {
          this.setState({verJobs: response.data.jobs})
        }).catch ((err) => {
          console.log(err.message)
        })
    }
    deletarJobs = (id) => {
      if(window.confirm("Deseja deletar") ===  true) {
      const url = `https://labeninjas.herokuapp.com/jobs/${id}`
      axios.delete(url, {
        headers:{
          Authorization: "30167c40-cd85-49b4-96f6-7d20b939127f"
        }
      })
      .then(()=>{
       alert("Deletado")
       this.mostrarJobs()
      })
      .catch((err)=>{
       alert('Ocorreu um erro')
      })
    } else {

    }
    }

    render() {
        const listaJobs = this.state.verJobs.map((job) => {
            return (
              <div key={job.id}>
                {job.title}
                <button onClick={()=>this.deletarJobs(job.id)}>Deletar</button>
              </div>
            )
          })
    return (
      <div>
        {listaJobs}
      </div>
    )
  }
}