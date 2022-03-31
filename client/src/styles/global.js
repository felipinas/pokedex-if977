import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f7f8fc;
  }

  button, input {
    font-family: 'Roboto', sans-serif;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, .5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;

    background: white;

    padding: 3rem;
    border-radius: .25rem;

    position: relative;
  }
`