import {createGlobalStyle, GlobalStyleComponent} from 'styled-components'
import {theme} from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: inherit;
  }

  #root {
    height: 100vh;
  }
`
