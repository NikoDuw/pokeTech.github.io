import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';



function App() {
  const pokeList = [{nombre: "SPEAROW", habilidades: ["dormir", "comer"]},
                    {nombre: "FEAROW", habilidades: []},
                    {nombre: "EKANS", habilidades: []},
                    {nombre: "ARBOK", habilidades: []},
                    {nombre: "PIKACHU", habilidades: []},
                    {nombre: "RAICHU", habilidades: []},
                    {nombre: "SANDSHREW", habilidades: []},
                    {nombre: "NIDORINA", habilidades: []},
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