import { useEffect, useState } from "react";
import Card from "../components/Card";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(40);

  //récupération des 40 premiers poke
  const firstPokemons = pokemons.slice(0, count);

  //fetch api
  useEffect(() => {
    setLoading(true);
    fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
      .then((res) => res.json())
      .then((allpokemon) => {
        setPokemons(allpokemon);
        setLoading(false);
      });
  }, []);

  //scroll load avec délais pour test
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setCount(count + 20);
        setLoading(false);
      }, "1000");
    }
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [count, loading]);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoading(true);
    }
  };

  // console.log(pokemons);

  return (
    <div className="bg-slate-100 w-screen min-h-screen flex flex-wrap justify-center p-4 relative">
      {loading && (
        <div role="status" className="absolute bottom-0 right-0 m-4">
          <img className="w-20" src="./assets/DD0.gif" alt="Carapuce bg" />
        </div>
      )}

      {firstPokemons &&
        firstPokemons.map((pokemon, id) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
    </div>
  );
};

export default HomePage;
