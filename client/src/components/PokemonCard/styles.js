import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 2rem;
    padding: 2rem 1.5rem;

    background: white;

    border-radius: .25rem;

    h1 {
        margin-bottom: .5rem;
    }

    p {
        color: gray;
        font-weight: 300;
        font-size: .9rem;
    }

    div ~ div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: right;

        span {
            color: gray;
            font-weight: 300;
            font-size: .9rem;

            cursor: pointer;
            
            &:hover {
                filter: brightness(.2);
            }
        }

        span ~ span {
            margin-top: 1rem;
        }
    }
`;
