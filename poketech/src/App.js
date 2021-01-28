import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';



function App() {
  const pokeList = [{nombre: "SPEAROW", habilidades: ["dormir", "comer"], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png" },
                    {nombre: "FEAROW", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"},
                    {nombre: "EKANS", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"},
                    {nombre: "ARBOK", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"},
                    {nombre: "PIKACHU", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},
                    {nombre: "RAICHU", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"},
                    {nombre: "SANDSHREW", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png"},
                    {nombre: "NIDORINA", habilidades: [], url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"},
                    ]
  return (
    <div className="App">
      <Header/>
      <div className="container-cards">
        <CardList cards={pokeList}/>
       </div>
      <Footer/>
    </div>
  );
}

export default App;