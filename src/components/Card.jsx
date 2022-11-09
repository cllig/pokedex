const Card = (props) => {
  const pokemon = props.pokemon;

  return (
    <main>
      <img src={pokemon.image} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
    </main>
  );
};

export default Card;
