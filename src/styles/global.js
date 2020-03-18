import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
     background-color: ${theme.color.lightGrey};
  }

  a,
  button {
    outline: none;
    border: none;
    background: transparent;
    text-decoration: none;
    color: ${theme.color.primary};
  }

  main {
    text-align: center;
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: ${vwMobile(28)};
    font-weight: normal;
    text-transform: uppercase;
    color: black;
    @media (min-width: ${media.tablet}) {
      font-size: ${vwTablet(48)};
    }
    @media (min-width: ${media.desktop}) {
      font-size: ${vw(64)};
    }
  }
`;
