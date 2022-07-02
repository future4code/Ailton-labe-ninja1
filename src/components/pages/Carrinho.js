import React, { Component } from 'react'
import styled from 'styled-components'

const BotaoCarrinho = styled.button`
margin: 4px;
padding: 7px;
width: 200px;
border-radius: 20px;
border:1px solid purple;
:hover {
  background-color: #8878c7;
  color: white;
  border:1px solid white;
  }
`

const Botao = styled.button`
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

const AreaToda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`
  
export default class carrinho extends Component {

    render() {
      const carrinhojobs = this.props.carrinho.map((job) => {
        return <div key={job.id}>
          <p>{job.title}</p>
          <p>{job.price}</p>
          <BotaoCarrinho onClick={() => this.props.esvaziarItem(job.id)}>Apagar item do seu carrinho</BotaoCarrinho>
        </div>
      })

      let conta = 0

      this.props.carrinho.forEach((job) => {
        conta += job.price
      })
     
    return (
      <AreaToda>
        {carrinhojobs.length > 0 ? (
          <div>
            {carrinhojobs}
            <span>TOTAL DA COMPRA: R$ {conta}</span>
            <Botao onClick={() => this.props.esvaziarCarrinho()}>Finalizar sua compra</Botao>
            <Botao onClick={() => this.props.trocarPagina("ListaJobs")}>Voltar para Lista de Serviços</Botao>
          </div>
        ) : (
          <div>
          <p>CARRINHO VAZIO</p>
          <Botao onClick={() => this.props.trocarPagina("ListaJobs")}>Voltar para Lista de Serviços</Botao>
          </div>
        )}
      </AreaToda>
    )
  }
}
