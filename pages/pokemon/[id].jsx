export default function Pokemon({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name} </h1>
      <p>{pokemon.id}</p>
      <p>{pokemon.stats.HP}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pokebuildapi.fr/api/v1/pokemon/${params.id}`
  );
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
  const pokemons = await res.json();

  return {
    paths: pokemons.map((pokemon) => ({
      params: { id: pokemon.id.toString() },
    })),
    fallback: false, //si id unknow : 404
  };
}
