import React, { Component } from 'react';
import styled from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

import Container from 'components/Container';
import Project from './elements/Project';

import data from 'src/data/projects';

class Portfolio extends Component {
  render() {
    return (
      <Root>
        <Container small>
          <h1>
            Portfolio
            <div>
              <span />
              <span />
              <span />
            </div>
          </h1>
          <Projects>
            {data.map((project, index) => (
              <Project project={project} key={index} index={index} />
            ))}
          </Projects>
        </Container>
      </Root>
    );
  }
}

export default Portfolio;

const Root = styled.div`
  overflow-x: hidden;
  width: 100vw;
  h1 {
    text-align: left;
    text-transform: uppercase;
    width: 100%;
    @media (min-width: ${media.tablet}) {
      text-align: center;
    }
    div {
      display: flex;
      bottom: ${vwMobile(5)};
      margin-left: ${vwMobile(3)};
      @media (min-width: ${media.tablet}) {
        bottom: ${vwTablet(5)};
        margin-left: ${vwTablet(215)};
      }
      @media (min-width: ${media.desktop}) {
        bottom: ${vw(5)};
        margin-left: ${vw(268)};
      }
    }
    span {
      width: ${vwMobile(7)};
      height: ${vwMobile(7)};
      margin-right: ${vwMobile(7)};
      @media (min-width: ${media.tablet}) {
        width: ${vwTablet(10)};
        height: ${vwTablet(10)};
        margin-right: ${vwTablet(8)};
      }
      @media (min-width: ${media.desktop}) {
        width: ${vw(10)};
        height: ${vw(10)};
        margin-right: ${vw(8)};
      }
      &:first-of-type {
        background-color: ${({ theme }) => theme.color.mediumPurple};
      }
      &:nth-of-type(2) {
        background-color: ${({ theme }) => theme.color.darkPurple};
      }
      &:last-of-type {
        background-color: ${({ theme }) => theme.color.darkBlue};
      }
    }
  }
`;

const Projects = styled.div`
  margin-top: ${vwMobile(45)};
  @media (min-width: ${media.tablet}) {
    margin-top: ${vwTablet(70)};
  }
  @media (min-width: ${media.desktop}) {
    margin-top: ${vw(110)};
  }
`;
