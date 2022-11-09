import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import PokemonDetail from "./views/PokemonDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonDetail />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>ERROR 404</p>
              <h1>Vous êtes arrivé à Bugville ! </h1>
              <p>
                Vous ne pouvez rien faire dedans… Le seul moyen de sortir c’est
                d’utiliser Vol.
              </p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
