import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    color: gray;

    padding: 1rem;
    margin-bottom: 2rem;

    ul {
        list-style: none;
        display: flex;

        a {
            text-decoration: none;
            color: gray;

            transition: all .2s;

            &:hover {
                color: black;
            }
        }

        li ~ li {
            margin-left: 2rem;
        }
    }
`;
