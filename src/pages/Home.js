import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

import Container from 'components/Container';

class Home extends Component {
  render() {
    return (
      <Root>
        <Container>
          <h1>Dakota Mauza</h1>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/photography">Photography</Link>
          </nav>
        </Container>
      </Root>
    );
  }
}

export default Home;

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${require('src/assets/images/home/home-background.jpg')});
  background-size: cover;
  background-position: center;

  nav {
    display: flex;
    flex-direction: column;
  }

  a {
    color: black;
    font-size: ${vwMobile(20)};
    padding-left: ${vwMobile(2)};
    margin-bottom: ${vwMobile(12)};
    @media (min-width: ${media.tablet}) {
      font-size: ${vwTablet(32)};
      padding-left: ${vwTablet(5)};
      margin-bottom: ${vwTablet(20)};
    }
    @media (min-width: ${media.desktop}) {
      font-size: ${vw(32)};
      padding-left: ${vw(5)};
      margin-bottom: ${vw(20)};
    }
  }

  h1 {
    margin-bottom: ${vwMobile(20)};
    @media (min-width: ${media.tablet}) {
      margin-bottom: ${vwTablet(30)};
    }
    @media (min-width: ${media.desktop}) {
      margin-bottom: ${vw(30)};
    }
  }
`;
