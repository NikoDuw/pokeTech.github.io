import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import React from 'react'


class App extends React.Component {
        state = { pokeList: [{nombre: "SPEAROW", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png" },
                    {nombre: "FEAROW", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"},
                    {nombre: "EKANS", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"},
                    {nombre: "ARBOK", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"},
                    {nombre: "PIKACHU", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},
                    {nombre: "RAICHU", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"},
                    {nombre: "SANDSHREW", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png"},
                    {nombre: "NIDORINA", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"},
                    ]}
  
  updatePokeList(nombre, habilidades){
    const newPokeList = this.state.pokeList.map(pokemon => {
      if(pokemon.nombre === nombre){
        return {...pokemon,habilidades}
      }
      return pokemon
    })
    this.setState({pokeList: newPokeList})
  }
  
  getHabilidad = async (nombre) => { 
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const data = await request.json()
    return data.abilities
  }
async componentDidMount(){
    const abilities = await this.getHabilidad("SPEAROW".toLowerCase())
    this.updatePokeList("SPEAROW",abilities)
  }
  render(){
  return (
    <div className="App">
      <Header/>
      <div className="container-cards">
        <CardList cards={this.state.pokeList}/>
       </div>
      <Footer/>
    </div>
  );
  }
}

export default App;



// const getHabilidadAsync = async () => {
//   try{

//     const resPost = await fetch('https://pokeapi.co/api/v2/pokemon/')

//     const post = await resPost.json()

//   } catch (error) {

//   }
// }

// getHabilidadAsync()