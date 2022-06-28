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
 
 
    render() {
        const listaJobs = this.state.verJobs.map((job) => {
            return (
              <div key={job.id}>
                {job.title}
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
