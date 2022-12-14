const Card = (props) => {
  const pokemon = props.pokemon;

  return (
    <div
      className="flex flex-col items-center w-52 m-2 rounded-lg shadow
    transform transition duration-500 hover:scale-110"
    >
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p className="text-slate-500 text-start">No.{pokemon.pokedexId}</p>
      <p>{pokemon.name}</p>
      <div className="flex flex-row items-left pb-2">
        {pokemon.apiTypes.map((type, i) => (
          <div className="w-4">
            <img src={type.image} alt={type.name} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
