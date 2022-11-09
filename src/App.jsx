import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
      .then((res) => res.json())
      .then((allpokemon) => {
        setPokemons(allpokemon);
        setLoading(false);
      });
  }, []);

  // console.log(pokemons);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <p>... loading</p>}

      {pokemons &&
        pokemons.map((pokemon, id) => (
          <button>
            <Card pokemon={pokemon} key={pokemon.id} />
          </button>
        ))}
    </div>
  );
};

export default App;
