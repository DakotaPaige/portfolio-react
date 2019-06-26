import React from 'react';
import styled from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

import Button from 'components/Button';

const Project = props => {
  const { project, index } = props;
  return (
    <Root index={index}>
      <div className="image">
        <Image src={project.image} alt={project.title} />
        <div className="background" />
      </div>
      <div className="description">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Button text="View Project" />
      </div>
    </Root>
  );
};

export default Project;

const Root = styled.div`
  margin-bottom: ${vwMobile(40)};
  @media (min-width: ${media.tablet}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${vwTablet(80)};
  }
  @media (min-width: ${media.desktop}) {
    margin-bottom: ${vw(80)};
  }
  img {
    width: ${vwTablet(300)};
    height: auto;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    @media (min-width: ${media.tablet}) {
      width: ${vwTablet(350)};
      height: auto;
      object-fit: cover;
      object-position: center;
    }
    @media (min-width: ${media.desktop}) {
      width: ${vw(480)};
      height: auto;
      object-fit: cover;
      object-position: center;
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.color.darkPurple};
        position: absolute;
        bottom: ${vw(-15)};
        right: ${vw(-15)};
        z-index: -1;
      }
    }
  }
  h2 {
    font-size: ${vwMobile(28)};
    font-weight: normal;
    @media (min-width: ${media.tablet}) {
      font-size: ${vwTablet(28)};
    }
    @media (min-width: ${media.desktop}) {
      font-size: ${vw(36)};
    }
  }
  p {
    font-size: ${vwMobile(18)};
    margin: ${vwMobile(15)} 0;
    @media (min-width: ${media.tablet}) {
      font-size: ${vwTablet(20)};
      margin: ${vwTablet(15)} 0;
    }
    @media (min-width: ${media.desktop}) {
      font-size: ${vw(24)};
      margin: ${vw(25)} 0;
    }
  }
  .description {
    margin-top: ${vwMobile(50)};
    @media (min-width: ${media.tablet}) {
      order: ${props => (props.index % 2 === 0 ? 1 : 0)};
      max-width: ${vwTablet(315)};
      margin-top: 0;
    }
    @media (min-width: ${media.desktop}) {
      max-width: ${vw(366)};
    }
  }
  .image {
    position: relative;
    @media (min-width: ${media.tablet}) {
      order: ${props => (props.index % 2 === 0 ? 0 : 1)};
    }
    .background {
      position: absolute;
      bottom: ${vwMobile(-20)};
      right: ${vwMobile(-15)};
      z-index: -1;
      width: ${vwMobile(500)};
      height: 100%;
      background-color: ${({ theme }) => theme.color.darkPurple};
      @media (min-width: ${media.tablet}) {
        bottom: ${vwTablet(-15)};
        width: 100%;
        right: ${props => (props.index % 2 === 0 ? vwTablet(-15) : 'auto')};
        left: ${props => (props.index % 2 === 0 ? 'auto' : vwTablet(-15))};
      }
      @media (min-width: ${media.desktop}) {
        bottom: ${vw(-15)};
        right: ${props => (props.index % 2 === 0 ? vw(-15) : 'auto')};
        left: ${props => (props.index % 2 === 0 ? 'auto' : vw(-15))};
      }
    }
  }
`;

const Image = styled.div`
  width: ${vwMobile(300)};
  height: ${vwMobile(170)};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  @media (min-width: ${media.tablet}) {
    width: ${vwTablet(350)};
    height: ${vwTablet(200)};
  }
  @media (min-width: ${media.desktop}) {
    width: ${vw(480)};
    height: ${vw(275)};
  }
`;
