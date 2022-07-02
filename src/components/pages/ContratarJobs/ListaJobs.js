import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Footer2 from '../Footer/Footer'
import Header from '../Header/Header'
import adicionarCarrinho from '../Carrinho'
const AreaTotal = styled.div`
 border: 2px solid #510696;
 border-radius: 20px;
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
const FiltersContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-wrap:wrap;
   padding: 8px;
`
const BotaoDel = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #7165BF;
  color: white;
  font-size: medium;
  border: 1px solid purple;
  border-radius: 30px;
  padding: 8px;
  margin: 16px;
  cursor: pointer;
  outline: none;
  :hover {
  background-color: #A8A0D9;
  color: purple;
  }
`

const Titulo = styled.h1`
 display:flex;
 justify-content:center;
 padding: 8px;
 color: purple;
`
const JobTitle = styled.h2`
 display:flex;
 justify-content:center;
 font-size: larger;
 `

const BordaInput = styled.input`
  border: 2px solid #7165BF;
  border-radius: 20px;
  padding: 4px;
  margin: 2px;
`

const Card = styled.div`
  border: 1px solid purple;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 23px;
  padding: 15px;
  margin: 12px;
  background-color: #deddeb;

`
export default class ListaJobs extends Component {
  state = {
    verJobs: [],
    busca: "",
    minPrice: "",
    maxPrice: ""
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

  updateBusca = (event) => {
    this.setState({busca: event.target.value})
  }

  updateMinPrice = (event) => {
    this.setState({minPrice: event.target.value})
  }

  updateMaxPrice = (event) => {
    this.setState({maxPrice: event.target.value})
  }

  render() {

    const listaJobs = this.state.verJobs
    .filter(job => {
      return job.title.toLowerCase().includes(this.state.busca.toLowerCase()) ||
        job.description.toLowerCase().includes(this.state.busca.toLowerCase())
    })
    .filter(job => {
      return this.state.minPrice === "" || job.price >= this.state.minPrice
    })
    .filter(job => {
      return this.state.maxPrice === "" || job.price <= this.state.maxPrice
    })
    .map((job) => {
      return (
        <Card key={job.id}>
          <JobTitle><b>{job.title}</b></JobTitle>
          <p>
            <b>Preço:</b> R$ {job.price}
          </p>
          <p>
            <b>Prazo:</b> {job.dueDate.slice(0, 10)}
          </p>
          <BotaoDel onClick={() => this.deletarJobs(job.id)}>Deletar</BotaoDel>
          <BotaoDel onClick={() => this.props.adicionarCarrinho} >Adicionar ao Carrinho</BotaoDel>
        </Card>
      )
    })

    return (
      <div>
        <Header passaBotao={this.props.irParaHome} passaCarinho={this.props.irParaCarrinho}/>
        <FiltersContainer>
          <BordaInput
            placeholder='Pesquisa'
            value={this.state.busca}
            onChange={this.updateBusca}
          />
           <BordaInput 
            type="number"
            placeholder='Valor mínimo'
            value={this.state.minPrice}
            onChange={this.updateMinPrice}
          />
           <BordaInput 
            type="number"
            placeholder='Valor máximo'
            value={this.state.maxPrice}
            onChange={this.updateMaxPrice}
          />

          <span>
            <label for="sort">Ordenar: </label>
            <select name="sort">
              <option value="title"></option>
              <option value="price"></option>
              <option value="dueDate"></option>
            </select>
          </span>
        </FiltersContainer>
        <AreaTotal>
          <Titulo><b>LISTA DE SERVIÇOS</b></Titulo>
          {listaJobs}
        </AreaTotal>

        <Footer2 />
      </div>
    )
  }
}