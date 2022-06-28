import React, { Component } from 'react'
import axios from 'axios'
export default class TelaCadastrar extends Component {
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
  }).catch((err)=> {
    console.log(err)
  })
}
  render() {
    return (
      <div>
        <form>
          HomeCadastrar <br />
          <label>Titulo</label>
          <input value={this.state.titulo} onChange={this.onChangeTitulo}/>
          <label>Descrição</label>
          <input value={this.state.descricao} onChange={this.onChangeDescricao}/>
          <label>Valor</label>
          <input type="number" value={this.state.valor} onChange={this.onChangeValor}/>
          <br />
          <label>Forma de pagamento</label>
          <select value={this.state.formaPagamento} onChange={this.onChangeformaPagamento}>
            <option value=""></option>
            <option value="Em espécie">Em espécie</option>
            <option value="Boleto">Boleto</option>
            <option value="Cartão deDébito">Cartão deDébito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
          <label>Prazo</label>
          <input type="date" value={this.state.data} onChange={this.onChangeData}/>
        </form>
        <button onClick={this.addJobs}>Add job</button>
      </div>
    )
  }
}











