import {  useState, useEffect  } from 'react'
import { api } from '../../services/api'
import PokemonBox from '../PokemonBox';
import { Container, Content } from './styles';

export const PokemonList = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [offsetPokemons, setOffsetPokemons] = useState(0);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getPokemonData = async () => {
    const newPokemonsUrl = await api
    .get(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offsetPokemons}`);

    const newPokemons = [];

    for (let pokemon of newPokemonsUrl.data.results) {
      const pokemonData = await api.get(pokemon.url);
      newPokemons.push(pokemonData.data)
    }

    setPokemonsData(prevState => [...prevState, ...newPokemons])
  };

  const increasePokemonList = () => setOffsetPokemons(prevState => prevState + 9);
  
  useEffect(() => {
    getPokemonData()
  }, [offsetPokemons])

  return (
    <Container>
      <Content>
        {
          pokemonsData.map((pokemon) => {
            const image = pokemon.sprites.other.dream_world.front_default;
            return (
              <PokemonBox
                key={pokemon.order}
                name={capitalize(pokemon.name)}
                order={pokemon.order}
                image={image}
                types={pokemon.types}
              />
            )
          })
        }
      </Content>
    
      <button onClick={increasePokemonList}>
        Ver mais
      </button>
    </Container>
  );
}