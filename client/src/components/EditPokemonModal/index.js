import {  useState  } from 'react';
import Modal from "react-modal"
import { toast } from 'react-toastify';

import { Container } from './styles';
import { api } from '../../services/api'

export const EditPokemonModal = (props) => {
    const {
        isOpen,
        onRequestClose,
        name: prevName,
        hp: prevHp,
        attack: prevAttack,
        power: prevPower
    } = props;
    
    const [name, setName] = useState(prevName);
    const [hp, setHp] = useState(prevHp);
    const [attack, setAttack] = useState(prevAttack);
    const [power, setPower] = useState(prevPower);

    const notifyError = () => toast.error("We couldn't edit that Pokemon :(!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const notifySucess = () => toast.success('Pokemon edited!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleEditPokemon = async event => {
        event.preventDefault();

        const { id } = props;

        const pokemonData = {
            name,
            hp,
            attack,
            power
        }

        try {
            await api.post(`/api/update/${id}`, pokemonData);

            notifySucess();
        } catch (error) {
            notifyError();
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleEditPokemon}>
                <h1>Edit Pokemon</h1>

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

                <button type="submit">Edit Pokemon</button>
            </Container>
        </Modal>
    );
}