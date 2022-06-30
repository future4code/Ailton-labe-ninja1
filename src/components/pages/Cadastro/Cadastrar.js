import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BotaoHome = styled.button`
  background-color: #7165BF;
  color: white;
  font-size: medium;
  border-radius: 30px;
  width: 12%;
  padding: 8px;
  margin: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  :hover {
  background-color: #A8A0D9;
  }
`

const AreaForm = styled.div`
  border: 1px solid #7165BF;
  padding: 10px;
  margin: 12px;
`

const Select = styled.select`
  margin-right: 20px;
`

const InputForm = styled.input`
  border: 1px solid #7165BF;
  padding: 10px;
  margin: 20px;
`

const LabelForm = styled.label`
  padding-right: 10px;
  
`

const BotaoAdd = styled.button`
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
}
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
    alert('Serviço adicionado')
  }).catch((err)=> {
    console.log(err)
  })
}
  render() {
    return (
      <div>
        <h2><b>CADASTRO</b></h2>
        <BotaoHome onClick={this.props.irParaHome}>Voltar para home</BotaoHome >
      <AreaForm>
        <form>
          Faça seu cadastro e se torne um ninja <br />
          <label>Titulo</label>
          <InputForm value={this.state.titulo} onChange={this.onChangeTitulo}/>
          <label>Descrição</label>
          <InputForm value={this.state.descricao} onChange={this.onChangeDescricao}/>
          <label>Valor</label>
          <InputForm type="number" value={this.state.valor} onChange={this.onChangeValor}/>
          <br />
          <LabelForm>Forma de pagamento</LabelForm >
          <Select value={this.state.formaPagamento} onChange={this.onChangeformaPagamento}>
            <option value=""></option>
            <option value="Em espécie">Em espécie</option>
            <option value="Boleto">Boleto</option>
            <option value="Cartão deDébito">Cartão de Débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </Select>
          <LabelForm >Prazo</LabelForm >
          <InputForm type="date" value={this.state.data} onChange={this.onChangeData}/>
        </form>
        <BotaoAdd onClick={this.addJobs}>Enviar</BotaoAdd>
      </AreaForm>
      </div>
    )
  }
}











