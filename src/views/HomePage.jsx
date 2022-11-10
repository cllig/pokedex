import { useEffect, useState } from "react";
import Card from "../components/Card";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(40);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
      .then((res) => res.json())
      .then((allpokemon) => {
        setPokemons(allpokemon);
        setLoading(false);
      });
  }, []);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading === true) {
      setCount(count + 20);

      setLoading(false);
    }
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [count, loading]);

  // console.log(pokemons);
  const firstPokemons = pokemons.slice(0, count);

  return (
    <div className="bg-slate-100 w-screen min-h-screen flex flex-wrap justify-center p-4">
      {loading && <p>... loading</p>}

      {firstPokemons &&
        firstPokemons.map((pokemon, id) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
    </div>
  );
};

export default HomePage;
