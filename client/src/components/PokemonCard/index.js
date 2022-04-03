import { Container } from './styles';
import { api } from '../../services/api'

import { toast } from 'react-toastify';
import { EditPokemonModal } from '../EditPokemonModal';
import { useState } from 'react';

export const PokemonCard = ({id, name, hp, attack, power}) => {
  const [isEditPokemonModalOpen, setIsEditPokemonModalOpen] = useState(false);

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

  const handleOpenEditPokemonModal = () => {
    setIsEditPokemonModalOpen(true);
  };

  const handleCloseEditPokemonModal = () => {
    setIsEditPokemonModalOpen(false);
  };

  const handleDeletePokemon = async () => {
    try {
      await api.delete(`/api/delete/${id}`);

      notifySucess();
    } catch (error) {
      notifyError();
    }
  }

  return (
    <>
      <Container>
        <div>
          <h1>{name}</h1>
          <p>HP: {hp}</p>
          <p>Attack: {attack}</p>
          <p>Power: {power}</p>
        </div>

        <div>
          <span onClick={handleDeletePokemon}>Delete Pokemon</span>
          <span onClick={handleOpenEditPokemonModal}>Edit Pokemon</span>
        </div>
      </Container>

      <EditPokemonModal
        isOpen={isEditPokemonModalOpen}
        onRequestClose={handleCloseEditPokemonModal}
        id={id}
        name={name}
        hp={hp}
        attack={attack}
        power={power}
      />
    </>
  );
}