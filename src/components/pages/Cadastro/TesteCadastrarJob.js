
// import ListaJobs from '../ContratarJobs/ListaJobs'
// import TelaCadastrar from './TelaCadastrar'
// import img from '../../../components/images/banner.jpg'
// import image from '../../../components/images/logoninjas.png'

// const AreaTotal = styled.div`
//  height: 100vh;
//  background-color: #5710B3;
//  position: relative;
// `
// const AreaCadastro = styled.div`
//     background-image: url(${img});
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     height: 500px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
// const AreaCars = styled.div`
//       position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//     width: 100px;
//     height: 100px;
//     background-color: #F5F4FB;
//     width: 500px;
//     height: 500px;
//     border-radius: 30px;
//     text-align: center;
// `

// const EstiloBotoesUm = styled.button`
//   background-color: #7165BF;
//   color: white;
//   font-size: medium;
//   border-radius: 30px;
//   width: 90%;
//   padding: 4px;
//   margin: 4px;
//   cursor: pointer;
//   border: none;
//   outline: none;
//   :hover {
//   background-color: #A8A0D9;
//   }
// `

// const EstiloBotoesDois = styled.button`
//   background-color: #7165BF;
//   color: white;
//   font-size: medium;
//   border-radius: 30px;
//   width: 90%;
//   padding: 4px;
//   margin: 4px;
//   cursor: pointer;
//   border: none;
//   outline: none;
//   :hover {
//   background-color: #A8A0D9;
//   }
// `

// const FotoNinja = styled.img`
//   width: 400px;
//   border-radius: 30px;
//   margin-top: 16px;
// `

// export default class CadastrarJob extends Component {
//   state = {
//     virarNinja: false,
//     verServicos: false
//   }

//   irParaTelaCadastrar = () => {
//     this.setState({
//       virarNinja: !this.state.clicou
//     })
//   }
//   irParaListaJobs = () => {
//     this.setState({
//       verServicos: !this.state.verJobs
//     })
//   }

//   render() {

//     return (
//       <div>
//         <AreaTotal>
//           <AreaCadastro>
//             <AreaCars>
//             <FotoNinja src={image}></FotoNinja>
//               {this.state.clicou ? <TelaCadastrar /> : ""}
//               <EstiloBotoesUm onClick={this.props.irParaLista}>Faça parte do time de ninjas</EstiloBotoesUm>

//               <EstiloBotoesDois onClick={this.irParaLista}>Contrate um ninja</EstiloBotoesDois>
//               {this.state.verJobsDois ? <ListaJobs /> : ""}
             
//             </AreaCars>
//           </AreaCadastro>
//         </AreaTotal>
//       </div>
//     )
//   }
// }

