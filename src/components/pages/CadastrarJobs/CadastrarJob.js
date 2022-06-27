import React, { Component } from 'react'
import HomeCadastrar from './HomeCadastrar'

export default class CadastrarJob extends Component {
  state = {
    homeCasdastrar: "Cadastrar"
  }
  trocarTela = () => {
    switch(this.stata.homeCasdastrar){
      case "Cadastrar":
        return <CadastrarJob />
      case "HomeCadastrar":
        return <homeCasdastrar/>
    }
  }
irParaHomeCadastrar = () => {
  this.setState({
    homeCasdastrar: "HomeCadastrar"
  })
}
  render() {
    return (
      <div>
        CadastrarJob
        <button onClick={(this.irParaHomeCadastrar}>Criar job</button>
      </div>
    )
  }
}
