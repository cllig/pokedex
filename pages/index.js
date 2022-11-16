import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function HomePage({ pokemons }) {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(42);

  //récupération des 40 premiers pokemons
  const firstPokemons = pokemons.slice(0, count);

  //scroll load avec délais pour test
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setCount(count + 42);
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
    <>
      

      <div className=" flex flex-wrap justify-center p-4 relative pt-10">
        {loading && <Loading />}

        {firstPokemons &&
          firstPokemons.map((pokemon, id) => (
            <Link href={`/pokemon/${pokemon.id}`}>
              <Card pokemon={pokemon} key={pokemon.id} />
            </Link>
          ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
  };
}
