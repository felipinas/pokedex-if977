import styled from 'styled-components';

const typeColors = {
    steel: '#9eb7b8',
    fire: '#fd7d24',
    grass: '#9BCC50',
    electric: '#eed535',
    water: '#4592c4',
    ice: '#4592c4',
    ground: '#f7de3f',
    rock: '#a38c21',
    fairy: '#fdb9e9',
    poison: '#5E2D6C',
    bug: '#729f3f',
    dragon: '#53a4cf',
    psychic: '#f366b9',
    flying: '#3dc7ef',
    fighting: '#d56723',
    normal: '#a4acaf',
}

/* const typesNeedTextWhite = ['fire', 'water', 'ice', 'poison', 'fighting'] */

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    background: white;

    border-radius: .4rem;
        

    img {
        height: 100px
    }

    span {
        margin: 1rem 0 .5rem 0;

        color: #aeb5be;
    }

    h1 {
        font-weight: bold;
    }

    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: .5rem;
    }
`;

export const TypeBox = styled.p`
    background: ${props => props.type ? typeColors[props.type] : 'gray'};

    border-radius: .25rem;

    padding: .25rem 1rem;

    margin: 0 .25rem;
`

