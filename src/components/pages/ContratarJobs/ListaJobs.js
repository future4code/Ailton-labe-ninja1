import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
   justify-content: space-between;
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
const JobTitle = styled.span`
 display:flex;
 justify-content:center;
 font-size: larger;
 cursor: pointer;
 `

const BordaInput = styled.input`
  border: 2px solid #7165BF;
  border-radius: 20px;
  padding: 4px;
`

const EstiloSelect = styled.select`
  border: 1px solid #7165BF;
  padding: 4px;
  height: 32px;
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
    maxPrice: "",
    sortingParameter: "title",
    order: 1,
    currentPage: false,
    id: ""
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

  updateBusca = (event) => {
    this.setState({busca: event.target.value})
  }

  updateMinPrice = (event) => {
    this.setState({minPrice: event.target.value})
  }

  updateMaxPrice = (event) => {
    this.setState({maxPrice: event.target.value})
  }

  updateSortingParameter = (event) => {
    this.setState({sortingParameter: event.target.value})
  }

  updateOrder = (event) => {
    this.setState({order: event.target.value})
  }

  render() {
    const renderListaJobs = this.state.verJobs
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
    .sort ((currentJob, nextJob) => {
      switch (this.state.sortingParameter) {
        case "title":
          return this.state.order * currentJob.title.localeCompare(nextJob.title)
        case "dueDate":
          return this.state.order * (new Date(currentJob.dueDate).getTime() < new Date(nextJob.dueDate).getTime())
        default:
          return this.state.order * (currentJob.price - nextJob.price) 
      }
    })
    .map((job) => {
      return (
        <Card key={job.id}>
          <JobTitle><b>{job.title}</b></JobTitle>
          <p>
            <b>Preço:</b> R$ {job.price.toFixed(2).replace(".", ",")}
          </p>
          <p>
            <b>Prazo:</b> {job.dueDate.slice(0, 10)}
          </p>
          <BotaoDel onClick={() => this.props.verDetalhes(job.id)}>Ver mais detalhes</BotaoDel>
          <BotaoDel onClick={() => this.props.addCarrinho(job.id)} >Adicionar ao Carrinho</BotaoDel>
        </Card>
      )
    })
    return (
      <div>
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

            <EstiloSelect 
              name="sort"
              value={this.state.sortingParameter}
              onChange={this.updateSortingParameter}
            >
              <option value="title">Título</option>
              <option value="price">Preço</option>
              <option value="dueDate">Prazo</option>
            </EstiloSelect >
          </span>

          <EstiloSelect 
              name="order"
              value={this.state.order}
              onChange={this.updateOrder}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </EstiloSelect >
        </FiltersContainer>
        <AreaTotal>
          <Titulo><b>LISTA DE SERVIÇOS</b></Titulo>
          <div>
            {renderListaJobs}
          </div>
        </AreaTotal>

      </div>
    )
  }
}
