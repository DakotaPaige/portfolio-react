import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from 'components/Container';

class About extends Component {
  render() {
    return (
      <Root>
        <Container>
          <h1>About</h1>
          <Link to="/">Home</Link>
        </Container>
      </Root>
    );
  }
}

export default About;

const Root = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrey};
  height: 100vh;
  width: 100vw;
`;
