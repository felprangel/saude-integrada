import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3B7D8C;
    --grey: #F2F2F2;
    --text-color: #193B59;
    --card-color: #5EBFBF;
    --legend-color: #00D3C2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #193B59;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    min-height: 100vh;
    background-color: var(--gray);
  }

  input,
  textarea,
  button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    border-radius: 0.1rem;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`
