import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const Button = props => {
  return (
    <Root {...props} as={props.to ? Link : 'button'}>
      {props.text}
      <span>></span>
      <span className="background" />
    </Root>
  );
};

export default Button;

const Root = styled.button`
  color: ${({ theme }) => theme.color.darkPurple};
  width: ${vwMobile(240)};
  height: ${vwMobile(45)};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${vwMobile(25)};
  font-size: ${vwMobile(16)};
  text-transform: uppercase;
  letter-spacing: ${vwMobile(1)};
  border: ${vwMobile(2)} solid ${({ theme }) => theme.color.darkPurple};
  border-left-width: ${vwMobile(5)};
  cursor: pointer;
  @media (min-width: ${media.tablet}) {
    width: ${vwTablet(240)};
    height: ${vwTablet(45)};
    padding: 0 ${vwTablet(25)};
    font-size: ${vwTablet(18)};
    letter-spacing: ${vwTablet(1.5)};
    border-width: ${vwTablet(2)};
    border-left-width: ${vwTablet(5)};
  }
  @media (min-width: ${media.desktop}) {
    width: ${vw(325)};
    height: ${vw(50)};
    font-size: ${vw(20)};
    letter-spacing: ${vw(1.5)};
    padding: 0 ${vw(25)};
    border-width: ${vw(2)};
    border-left-width: ${vw(5)};
    position: relative;
    transition: 0.5s ease-out;
    .background {
      width: 100%;
      max-width: ${vw(5)};
      height: 100%;
      position: absolute;
      top: 0;
      left: ${vw(-5)};
      transition: 0.5s ease-out;
      z-index: -1;
      background-color: ${({ theme }) => theme.color.darkPurple};
    }
    &:hover {
      color: white;
      .background {
        max-width: 100%;
        left: 0;
      }
    }
  }
`;
