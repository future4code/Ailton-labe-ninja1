import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Footer2 from '../Footer/Footer'
import Header from '../Header/Header'

const Container = styled.div`
display: flex;
justify-content: center;
min-height: 1010px;
`
const AreaTotal = styled.div`
 border: 2px solid #510696;
 margin-top: 20px;
 margin-bottom: 20px;
 text-align: center;
 width: 800px;
 display: flex;
 flex-direction: column;
`

const BotaoDel = styled.button`
  display: flex;
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
margin-top: 10px;
 text-align: center;
 font-weight: bold;
 font-size: 22px;
`

const Card = styled.div`
  border: 1px solid purple;
  border-radius: 23px;
  padding: 15px;
  margin: 12px;

`
const CardFlex = styled.div`
display: flex;
justify-content: space-between;
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
          <CardFlex>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>
              <b>Preço:</b> R$ {job.price}
            </p>
          </CardFlex>
          <div>
            <BotaoDel onClick={() => this.deletarJobs(job.id)}>Deletar</BotaoDel>
          </div>
        </Card>
      )
    })
    return (
      <div>
        <Header />

        <Titulo>Lista de serviços</Titulo>
        <Container>
          <AreaTotal>
            {listaJobs}
            <div>
              <BotaoHome onClick={this.props.irParaHome}>Voltar para home</BotaoHome >
            </div>
          </AreaTotal>
        </Container>

        <Footer2 />
      </div>
    )
  }
}