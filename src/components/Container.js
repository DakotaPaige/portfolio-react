import React from 'react';
import styled from 'styled-components';

import media from 'src/styles/media';
import { vw, vwTablet, vwMobile } from 'src/styles/utils';

const Container = props => <Root {...props}>{props.children}</Root>;

export default Container;

const Root = styled.div`
  padding: ${vwMobile(80)} ${vwMobile(10)};
  @media (min-width: ${media.tablet}) {
    padding: ${vwTablet(120)} ${vwTablet(45)};
  }
  @media (min-width: ${media.desktop}) {
    padding: ${vw(120)} ${vw(85)};
  }
`;
