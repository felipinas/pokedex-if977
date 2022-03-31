import styled from 'styled-components';

export const Container = styled.main`
    width: 90%;
    max-width: 800px;

    margin: auto;
`;

export const Header = styled.div`
    margin-bottom: 2rem;

    display: flex;
    justify-content: space-between;

    button {
        padding: 0 1rem;

        border: none;
        border-radius: .25rem;

        background-color: rgb(221, 243, 228);
        color: rgb(24, 121, 78);

        cursor: pointer;
        transition: all .2s;

        &:hover {
            background-color: rgb(204, 235, 215);
        }
    }
`;

