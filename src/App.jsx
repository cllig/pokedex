import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => res.json())
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((pokeData) => {
              setData(pokeData);
            });
        });
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>Pokedex</h1>
    </div>
  );
};

export default App;
