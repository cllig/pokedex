import { useEffect, useState } from "react";
import Card from "../components/Card";

const HomePage = () => {
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

  console.log(pokemons);

  return (
    <div className="bg-slate-100 w-screen min-h-screen flex flex-wrap justify-center p-4">
      {loading && <p>... loading</p>}

      {pokemons &&
        pokemons.map((pokemon, id) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
    </div>
  );
};

export default HomePage;
