import React, { Component } from 'react'
import styled from 'styled-components'
import imagem from '../../images/logo.png'

const HeaderArea = styled.header`
display: flex;  
justify-content: space-between;
align-items: center;
margin: 0 auto;
height: 90px;
h1 {
  color: #ccc;
}
`

const AreaMenu = styled.div`
display: flex;

p {
margin: 10px;
cursor: pointer;
:hover {
  color: #510696;
}
}
`
const FotoHeader = styled.img`
width: 150px;
padding: 10px 0 10px 30px;
`

const Botoes = styled.button`
  display: flex;
`

const BotaoCarrinho = styled.button`
margin: 4px;
padding: 7px;
width: 100px;
border-radius: 20px;
border:1px solid purple;
:hover {
  background-color: #8878c7;
  color: white;
  border:1px solid white;
  }
`
export default  class Header extends Component {
    render() {
   return (
<HeaderArea>
<FotoHeader src={imagem}></FotoHeader>

<AreaMenu>
<Botoes>
<BotaoCarrinho onClick={() => this.props.trocarPagina("Pagehome")}>Home</BotaoCarrinho>
<BotaoCarrinho onClick={() => this.props.trocarPagina("Carrinho")}>Carrinho</BotaoCarrinho>
</Botoes>
</AreaMenu>
</HeaderArea>
)
}
}