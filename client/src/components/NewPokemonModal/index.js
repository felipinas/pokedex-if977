import {  useState  } from 'react';
import Modal from "react-modal"
import { toast } from 'react-toastify';

import { Container } from './styles';
import { api } from '../../services/api'

export const NewPokemonModal = ({ isOpen, onRequestClose }) => {
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [attack, setAttack] = useState("");
    const [power, setPower] = useState("");

    const notifyError = () => toast.error("We couldn't create that Pokemon :(!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const notifySucess = () => toast.success('Pokemon created!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleCreateNewPokemon = async event => {
        event.preventDefault();

        const pokemonData = {
            name,
            hp,
            attack,
            power
        }

        try {
            await api.post('/api/pokemon', pokemonData);

            cleanForm();
            notifySucess();
        } catch (error) {
            notifyError();
        }
    }

    const cleanForm = () => {
        setName("");
        setHp("");
        setAttack("");
        setPower("");
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewPokemon}>
                <h1>Add Pokemon</h1>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="HP"
                    value={hp}
                    onChange={event => setHp(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Attack"
                    value={attack}
                    onChange={event => setAttack(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Power"
                    value={power}
                    onChange={event => setPower(event.target.value)}
                />

                <button type="submit">Add Pokemon</button>
            </Container>
        </Modal>
    );
}