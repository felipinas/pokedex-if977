import { Container } from './styles';
import { api } from '../../services/api'

import { toast } from 'react-toastify';

export const PokemonCard = ({id, name, hp, attack, power}) => {
  const notifyError = () => toast.error("We couldn't remove that Pokemon :(!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const notifySucess = () => toast.success('Pokemon removed!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const handleDeletePokemon = async () => {
    try {
      await api.delete(`/api/delete/${id}`);

      notifySucess();
    } catch (error) {
      notifyError();
    }
  }

  return (
    <Container>
      <div>
        <h1>{name}</h1>
        <p>HP: {hp}</p>
        <p>Attack: {attack}</p>
        <p>Power: {power}</p>
      </div>

      <div>
        <span onClick={handleDeletePokemon}>Delete Pokemon</span>
        <span>Edit Pokemon</span>
      </div>
    </Container>
  );
}