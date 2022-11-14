import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center w-screen bg-gradient-to-r from-red-500 to-blue-500">
      <Link href="/" className="flex justify-center w-1/6">
        <img className="m-4" src="./images/pokemon.png" alt="Logo Pokemon" />
      </Link>
    </div>
  );
};

export default Navbar;
