import { Routes as Router, Route } from "react-router-dom";
import MyPokemons from "./pages/MyPokemons";

import { Pokemons } from "./pages/Pokemons";

export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Pokemons/>} />
            <Route path="/my-pokemons" element={<MyPokemons/>} />
        </Router>
    )
}