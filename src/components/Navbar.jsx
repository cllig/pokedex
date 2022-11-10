import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center w-screen bg-gradient-to-r from-red-500 to-blue-500">
      <Link to="/" className="flex justify-center">
        <img
          className="w-1/5 m-4"
          src="./assets/pokemon.png"
          alt="Logo Pokemon"
        />
      </Link>
    </div>
  );
};

export default Navbar;
