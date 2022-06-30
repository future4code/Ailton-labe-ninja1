import React, { Component } from 'react'
import styled from 'styled-components'
import imagem from '../../images/logo.png'
import Carrinho from '../Carrinho'

const HeaderArea = styled.header`
display: flex;  
justify-content: space-between;
align-items: center;
border: 1px solid lightgrey;
   width: 800px;
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
const BotaoCarrinho = styled.button`
padding: 7px;
border-radius: 20px;
border:1px solid purple ;
:hover {
  background-color: #A8A0D9;
  color: white;
  }
`
export default  class Footer2 extends Component {
    render() {
   return (
<HeaderArea>
<FotoHeader src={imagem}></FotoHeader>

<AreaMenu>
<BotaoCarrinho onClick={() => this.props.irParaCarrinho()}>Carrinho</BotaoCarrinho>
</AreaMenu>
</HeaderArea>
)
}
}