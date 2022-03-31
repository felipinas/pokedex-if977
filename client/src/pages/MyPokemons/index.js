import {  useState, useEffect  } from 'react';
import { NewPokemonModal } from '../../components/NewPokemonModal';
import { PokemonCard } from '../../components/PokemonCard';

import { api } from '../../services/api';
import { Container, Header } from './styles';

function MyPokemons() {
    const [pokemonsData, setPokemonsData] = useState([]);
    const [isNewPokemonModalOpen, setIsNewPokemonModalOpen] = useState(false);

    const getPokemonData = async () => {
        const pokemons = await api.get('/api/pokemons');

        setPokemonsData(pokemons.data)
    };

    const handleOpenNewPokemonModal = () => setIsNewPokemonModalOpen(true);

    const handleCloseNewPokemonModal = () => setIsNewPokemonModalOpen(false);

    useEffect(() => {
        getPokemonData()
    }, []);

    return (
        <>
            <Container>
                <Header>
                    <h1>My Pokemons</h1>

                    <button onClick={handleOpenNewPokemonModal}>
                        Add Pokemon
                    </button>
                </Header>

                {
                    pokemonsData.map((pokemon) => (
                        <PokemonCard 
                            id={pokemon._id}
                            name={pokemon.name}
                            hp={pokemon.hp}
                            attack={pokemon.attack}
                            power={pokemon.power}
                        />
                    ))
                }
            </Container>

            <NewPokemonModal
                isOpen={isNewPokemonModalOpen}
                onRequestClose={handleCloseNewPokemonModal}
            />
        </>    
    );
}

export default MyPokemons;