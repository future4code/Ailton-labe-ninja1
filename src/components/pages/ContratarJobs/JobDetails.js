import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const AreaTotal = styled.div`
 border: 2px solid #510696;
 margin-top: 20px;
 margin-bottom: 20px;
 margin-left: 500px;
 text-align: center;
 width: 30%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

export default class JobDetails extends Component {
    state={
        verJob: {}
    }

    componentDidMount() {
        this.mostrarJobDetails()
      }

    mostrarJobDetails = () => {

        axios.get(`https://labeninjas.herokuapp.com/jobs/${this.props.jobId}`, {
          headers: {
            Authorization: "30167c40-cd85-49b4-96f6-7d20b939127f"
          }
        }).then((response) => {
          this.setState({ verJob: response.data })
        }).catch((err) => {
          console.log(err.message)
        })
      }

  render() {
    const arrayPagamento = this.state.verJob.paymentMethods && this.state.verJob.paymentMethods.map((forma) => {
        return <li key={forma}>{forma}</li>
    })
    return (
        <AreaTotal>
            {this.state.verJob.title && <h2>{this.state.verJob.title}</h2>}
            {this.state.verJob.description && <p>Descrição: {this.state.verJob.description}</p>}
            {this.state.verJob.dueDate && <p>Prazo: {this.state.verJob.dueDate.slice(0, 10)}</p>}
            {this.state.verJob.price && <p>Preço: R$ {this.state.verJob.price.toFixed(2).replace(".", ",")}</p>}
  
        <div>
            {arrayPagamento}
        </div>
        <button onClick={() => this.props.trocarPagina("ListaJobs")}>Voltar para Lista de Serviços</button>
        </AreaTotal>
    )
  }
}