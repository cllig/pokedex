export default function Pokemon({ pokemon }) {
  // const [evolution, seTevolution] = useState();

  console.log(pokemon.apiEvolutions[0]);

  return (
    <main className="text-center">
      <h1>{pokemon.name}</h1>
      <h2 className="text-slate-500">N°{pokemon.pokedexId}</h2>
      <div className="flex justify-center items-center my-8">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="bg-slate-200 rounded-3xl mx-8"
        />
        <div className="flex flex-col justify-center text-left">
          <p className="text-slate-500">Génération : {pokemon.apiGeneration}</p>

          <div className="flex place-content-around my-5">
            {pokemon.apiTypes.map((type) => (
              <div className="flex flex-col items-center">
                <img src={type.image} alt={type.name} className="w-4" />
                <p>{type.name}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-400 p-4 rounded-lg">
            <p>PV : {pokemon.stats.HP}</p>
            <p>Attaque : {pokemon.stats.attack}</p>
            <p>Défense : {pokemon.stats.defense}</p>
            <p>Attaque spéciale : {pokemon.stats.special_attack}</p>
            <p>Défense spéciale : {pokemon.stats.special_defense}</p>
            <p>Vitesse : {pokemon.stats.speed}</p>
          </div>
        </div>
      </div>
    </main>
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
    fallback: false, //si route unknow : 404
  };
}
