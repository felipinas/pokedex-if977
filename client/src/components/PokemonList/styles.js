import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 1120px;

    margin: 0 auto 4rem auto;

    display: flex;
    flex-direction: column;

    button {
        width: 10rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 4rem auto 0 auto;

        border: none;
        border-radius: .25rem;

        background-color: #dedfe2;
        color: gray;

        cursor: pointer;
        transition: all .2s;

        svg {
            margin-right: .5rem;
            fill: gray;
        }

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 2rem;
`;
