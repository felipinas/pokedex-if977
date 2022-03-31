import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 1rem;
    }

    input {
        height: 2rem;

        background-color: #f7f8fc;

        padding: 0 .5rem;

        font-weight: 300;

        border: none;
        border-radius: .25rem;

        outline: none;
    }

    input ~ input {
        margin-top: 1rem;
    }

    button {
        margin-top: 1rem;
        
        height: 2.5rem;

        border: none;
        border-radius: .25rem;

        cursor: pointer;

        transition: all .2s;

        &:hover {
            filter: brightness(.9);
        }
    }
`;
