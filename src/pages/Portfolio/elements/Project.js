import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { transitionIn } from 'src/redux/project';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

import Button from 'components/Button';

const Project = props => {
  const dispatch = useDispatch();

  const $background = useRef(null);
  const $transition = useRef(null);

  const { project, index } = props;

  const [isTransitioning, setIsTransitioning] = useState(false);

  const [position, setPosition] = useState({});

  useEffect(() => {
    let viewportOffset = $background.current.getBoundingClientRect();
    let position = {
      top: `${viewportOffset.top}px`,
      bottom: `${window.innerHeight - viewportOffset.bottom}px`,
      left: `${viewportOffset.left}px`,
      right: `${viewportOffset.left}px`,
    };
    setPosition(position);
  }, []);

  const navigate = to => {
    document.body.style.overflow = 'hidden';

    // Sets transition state so image fades down
    setIsTransitioning(true);

    // Grabbing the points for the box to be in to do the transition properly
    const viewportOffset = $background.current.getBoundingClientRect();

    let newPosition = {
      top: `${viewportOffset.top}px`,
      bottom: `${window.innerHeight - viewportOffset.bottom}px`,
      left: `${viewportOffset.left}px`,
      right: `${viewportOffset.right}px`,
      height: `${viewportOffset.height}px`,
      width: `${viewportOffset.width}px`,
    };

    setPosition(newPosition);

    $transition.current.style.top = newPosition.top;
    $transition.current.style.bottom = newPosition.bottom;
    $transition.current.style.left = newPosition.left;
    $transition.current.style.right = newPosition.right;
    $transition.current.style.width = newPosition.width;
    $transition.current.style.height = newPosition.height;

    setTimeout(() => {
      $transition.current.style.top = 0;
      $transition.current.style.bottom = 0;
      $transition.current.style.left = 0;
      $transition.current.style.right = 0;
      $transition.current.style.width = `100vw`;
      $transition.current.style.height = '100vh';
    }, 500);
    setTimeout(() => dispatch(transitionIn()), 1000);
    setTimeout(() => props.history.push(to), 1100);
  };

  return (
    <Root index={index} isTransitioning={isTransitioning}>
      <div className="image">
        <Image
          src={project.image}
          alt={project.title}
          isTransitioning={isTransitioning}
        />
        <div className="background" ref={$background} />
      </div>
      <div className="description">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Button
          text="View Project"
          onClick={() => navigate(`/portfolio/${project.to}`)}
        />
      </div>
      <BackgroundTransition
        ref={$transition}
        isTransitioning={isTransitioning}
      />
    </Root>
  );
};

Project.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
};

export default withRouter(Project);

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(10%);
  }
`;

const fadeOutAnimation = css`
  animation: ${fadeOut} 0.3s ease-out forwards;
`;

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
  ${props => props.isTransitioning && fadeOutAnimation};
  @media (min-width: ${media.tablet}) {
    width: ${vwTablet(350)};
    height: ${vwTablet(200)};
  }
  @media (min-width: ${media.desktop}) {
    width: ${vw(480)};
    height: ${vw(275)};
  }
`;

const BackgroundTransition = styled.div`
  background-color: ${({ theme }) => theme.color.darkPurple};
  opacity: ${props => (props.isTransitioning ? 1 : 0)};
  pointer-events: none;
  position: fixed;
  z-index: 10;
  transition: all 0.5s ease 0.3s, opacity 0s 0.3s;
`;
