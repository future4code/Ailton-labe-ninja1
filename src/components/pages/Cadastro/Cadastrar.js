import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const AreaForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
  border: 2px solid #7165BF;
  border-radius: 20px;
  padding: 10px;
  margin: 12px;
 
`

const Select = styled.select`
  margin-right: 20px;
`

const InputForm = styled.input`
  border: 1px solid #7165BF;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;

`

const LabelForm = styled.label`
  padding-right: 10px;
  
`

const BotaoAdd = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: #7165BF;
color: white;
font-size: medium;
border-radius: 30px;
width: 10%;
padding: 8px;
margin: 16px;
cursor: pointer;
border: none;
outline: none;
:hover {
background-color: #A8A0D9;
color: purple;
}
`
const Titulo = styled.h1`
 display:flex;
 justify-content:center;
 text-decoration-line: underline;
  text-decoration-style: solid;
    text-transform: uppercase;
    text-shadow: 2px 2px 5px purple;
    `

export default class Cadastrar extends Component {
  state = {
    titulo: '',
    descricao: '',
    valor: '',
    formaPagamento: '',
    data: '',
  }
  onChangeTitulo = (event) => {
    this.setState({
      titulo: event.target.value
    })
    console.log(this.state.titulo)
  }
  onChangeDescricao = (event) => {
    this.setState({
      descricao: event.target.value
    })
     console.log(this.state.descricao)
  }
  onChangeValor = (event) => {
    this.setState({
      valor: event.target.value
    })
    console.log(this.state.valor)
  }
  onChangeformaPagamento = (event) => {
    this.setState({
      formaPagamento: [event.target.value]
    })
    console.log(this.state.formaPagamento)
  }
onChangeData = (event) =>{
  this.setState({
    data: event.target.value
  })
  console.log(this.state.data)
}
addJobs = () => {
  const url = 'https://labeninjas.herokuapp.com/jobs'
  const body = {
    title: this.state.titulo,
    description:this.state.descricao,
    price: +this.state.valor,
    paymentMethods: this.state.formaPagamento,
    dueDate: this.state.data
  }
  axios.post(url, body, {
    headers: {
      Authorization: "30167c40-cd85-49b4-96f6-7d20b939127f"
    }
  }).then((res) => {
    // const NovoJob = [...this.state.verJobs, this.state.jobs]
    console.log(res)
    alert(`Serviço ${this.state.titulo} adicionado`)
    this.setState({
      titulo: "",
      descricao: "",
      valor: "",
      data: "",
      formaPagamento: []
    })
  }).catch((err)=> {
    console.log(err)
  })
  this.setState({ titulo: '', descricao: '', valor: '', formaPagamento: '',  data: ''})

}
  render() {
    return (
      <div>
       <br />
      <AreaForm>
        <form>
          <Titulo>Faça seu cadastro e se torne um ninja</Titulo> <br />
          <label>Titulo:</label>
          <InputForm value={this.state.titulo} onChange={this.onChangeTitulo}/>
          <label>Descrição:</label>
          <InputForm value={this.state.descricao} onChange={this.onChangeDescricao}/>
          <label>Valor:</label>
          <InputForm type="number" value={this.state.valor} onChange={this.onChangeValor}/>
          <br />
          <LabelForm>Forma de pagamento:</LabelForm >
          <Select value={this.state.formaPagamento} onChange={this.onChangeformaPagamento} >
            <option value=""></option>
            <option value="Em espécie">Em espécie</option>
            <option value="Boleto">Boleto</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </Select>
          <LabelForm >Prazo:</LabelForm >
          <InputForm 
          type="date" 
          value={this.state.data}
           onChange={this.onChangeData}
           />
        </form>
   
       
        <BotaoAdd onClick={this.addJobs}>Cadastrar</BotaoAdd>
      </AreaForm>
      
      </div>
    )
  }
}











