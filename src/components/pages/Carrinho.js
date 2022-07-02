import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header/Header'
import job from '../pages/ContratarJobs/ListaJobs'
import { Button } from '@chakra-ui/react'

const BotaoHome = styled.button`
  background-color: #7165BF;
  color: white;
  font-size: medium;
  border-radius: 30px;
  width: 20%;
  padding: 8px;
  margin: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  :hover {
  background-color: #A8A0D9;
  }
`

const AreaToda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`
  
export default class carrinho extends Component {
  
  adicionarCarrinho = (job) => {
    let idJob = job.id;
    const JobNoCarrinho = this.state.addCarrinho?.find(
      (item) => idJob === item.id
    );

    if (JobNoCarrinho) {
      const novoProduto = this.state.addCarrinho.map((jobAdd) => {
        if (idJob === jobAdd.id) {
          return {
            ...jobAdd,
            quantidade: jobAdd.quantidade + 1,
          };
        }
        return jobAdd;
      });
      this.setState({ addCarrinho: novoProduto });
    } else {
      const novoJob = {
        ...job,
        quantidade: 1,
      };
      const novoJobCarrinho = [...this.state.addCarrinho, novoJob];
      alert("Adiconado")
      this.setState({ addCarrinho: novoJobCarrinho });
    }
  };

  removeJobCarrinho = (jobId) => {
    const removeDoCarrinho = this.state.addCarrinho
      .map((job) => {
        if (job.id === jobId) {
          return {
            ...job,
            quantidade: job.quantidade - 1,
          };
        }
        return job;
      })
      .filter((job) => job.quantidade > 0);

    this.setState({ addCarrinho: removeDoCarrinho });
    alert("Removido")
  };

    render() {

     
    return (
      <AreaToda>
        <p>Aqui é o carrinho</p>

        jobNoCarrinho={this.state.addCarrinho}
            removeJobCarrinho={this.removeJobCarrinho}
        <BotaoHome onClick={this.props.irParaHome}>Voltar para home</BotaoHome >
      </AreaToda>
    )
  }
}
