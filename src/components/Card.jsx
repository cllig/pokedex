import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const pokemon = props.pokemon;
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
      className="flex flex-col items-center w-1/6 m-2 rounded-lg shadow transform transition duration-500 hover:scale-110"
    >
      <img src={pokemon.sprite} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
    </button>
  );
};

export default Card;
