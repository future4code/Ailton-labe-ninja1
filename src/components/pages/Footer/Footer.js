import React, { Component } from 'react'
import styled from 'styled-components'
import instagram from './../../images/instagram.png'
import facebook from './../../images/facebook.png'
import twitter from './../../images/twitter.png'
import youtube from './../../images/youtube.png'

 const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: end;
  align-items: center;
  grid-column: 1/-1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #8878c7;
`

const ImagemRedeSocial = styled.img`
  width: 25px;
  margin: 0 10px 0 5px;
  :hover{
    box-shadow: 1px 1px 5px white;
    cursor:pointer
  }
`

 const TextoEsquerda = styled.p`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;
  height: 50px;
`

 const TextoCentral = styled.p`
  font-family: 'Courier New', Courier, monospace;
`

 const SigamNos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 3px 0;
`

 const Redes = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`

 const TextoSigam = styled.p`
  margin: 0 0 3px 0;
  font-family: 'Courier New', Courier, monospace;
`



export default  class Footer2 extends Component {
 render() {
return (
    <Footer>
<TextoEsquerda>
LabeNinjas
</TextoEsquerda>

<TextoCentral>
    Rua das Flores,250, Rio de Janeiro. CEP: 32507-851 
    </TextoCentral>
<SigamNos>
    <TextoSigam> Sigam-nos nas redes sociais</TextoSigam>
<Redes>
<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={instagram} /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={youtube} /></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={twitter} /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={facebook} /></a>
</Redes>
</SigamNos>
    </Footer>
)




 }





}