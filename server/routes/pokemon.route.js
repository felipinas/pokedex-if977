const { Router } = require('express');

const pokemonController = require('../controllers/pokemon.controller');

const routes = Router();

routes.post('/pokemon', pokemonController.create)
routes.get('/pokemons', pokemonController.read);
routes.post('/update/:pokemon_id', pokemonController.update);
routes.delete('/delete/:pokemon_id', pokemonController.delete);

module.exports = routes;