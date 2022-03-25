const { Router } = require('express');

const pokemonRoute = require('./pokemon.route');

const router = Router();

const defaultRoutes = [
    {
        path: '/api',
        route: pokemonRoute
    }
];

defaultRoutes.forEach(({path, route}) => router.use(path, route));

module.exports = router;