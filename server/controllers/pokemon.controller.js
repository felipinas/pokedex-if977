const Pokemon = require('../models/pokemon.model');

module.exports = {
    create: async (req, res) => {
        const {
            name,
            hp,
            attack,
            power
        } = req.body;
    
        try {
            const createdPokemon = await Pokemon.create({
                name,
                hp,
                attack,
                power
            })
    
            return res.status(200).send(createdPokemon)
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    read: async (req, res) => {
        try {
            const allPokemons = await Pokemon.find();
    
            return res.status(200).send(allPokemons);
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    update: async (req, res) => {
        try {
            const {
                name,
                hp,
                attack,
                power
            } = req.body;
    
            const { pokemon_id } = req.params;
    
            const pokemonNewData = {
                name,
                hp,
                attack,
                power
            }
    
            const pokemonUpdated = await Pokemon.updateOne({ _id: pokemon_id }, pokemonNewData);
    
            return res.status(200).send(pokemonUpdated);
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { pokemon_id } = req.params;
    
            const deletedPokemon = await Pokemon.findByIdAndDelete(pokemon_id);
    
            return res.status(200).send(deletedPokemon);
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}