import React from 'react';
import styled from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const Button = props => {
  return (
    <Root {...props}>
      {props.text}
      <span>></span>
    </Root>
  );
};

export default Button;

const Root = styled.button`
  background-color: ${({ theme }) => theme.color.darkPurple};
  color: white;
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
  border-radius: ${vwMobile(25)};
  cursor: pointer;
  @media (min-width: ${media.tablet}) {
    width: ${vwTablet(240)};
    height: ${vwTablet(45)};
    padding: 0 ${vwTablet(25)};
    font-size: ${vwTablet(18)};
    letter-spacing: ${vwTablet(1.5)};
    border-radius: ${vwTablet(25)};
  }
  @media (min-width: ${media.desktop}) {
    width: ${vw(325)};
    height: ${vw(50)};
    font-size: ${vw(20)};
    letter-spacing: ${vw(1.5)};
    padding: 0 ${vw(25)};
    border-radius: ${vw(25)};
  }
`;
