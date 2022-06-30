import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Footer2 from '../Footer/Footer'
import Header from '../Header/Header'

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

const BotaoDel = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #7165BF;
  color: white;
  font-size: medium;
  border-radius: 30px;
  width: 70%;
  padding: 8px;
  margin: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  :hover {
  background-color: #A8A0D9;
  }
`

const BotaoHome = styled.button`
  background-color: #7165BF;
  color: white;
  font-size: medium;
  border-radius: 30px;
  width: 50%;
  padding: 8px;
  margin: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  :hover {
  background-color: #A8A0D9;
  }
`
const Titulo = styled.h1`
 display:flex;
 justify-content:center;
 
`

const Card = styled.div`
  border: 1px solid purple;
  border-radius: 23px;
  padding: 15px;
  margin: 12px;

`
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
    }).then((response) => {
      this.setState({ verJobs: response.data.jobs })
    }).catch((err) => {
      console.log(err.message)
    })
  }
  deletarJobs = (id) => {
    if (window.confirm("Deseja deletar") === true) {
      const url = `https://labeninjas.herokuapp.com/jobs/${id}`
      axios.delete(url, {
        headers: {
          Authorization: "30167c40-cd85-49b4-96f6-7d20b939127f"
        }
      })
        .then(() => {
          alert("Deletado")
          this.mostrarJobs()
        })
        .catch((err) => {
          alert('Ocorreu um erro')
        })
    } else {

    }
  }

  render() {
    const listaJobs = this.state.verJobs.map((job) => {
      return (
        <Card key={job.id}>
          <h3>{job.title}</h3>
          <p>
            <b>Preço:</b> R$ {job.price}
          </p>
          <BotaoDel onClick={() => this.deletarJobs(job.id)}>Deletar</BotaoDel>
        </Card>
      )
    })
    return (
      <div>
        <Header />
        <Titulo><b>LISTA DE SERVIÇOS</b></Titulo>
        <AreaTotal>
          {listaJobs}
          <BotaoHome onClick={this.props.irParaHome}>Voltar para home</BotaoHome >
        </AreaTotal>

        <Footer2 />
      </div>
    )
  }
}