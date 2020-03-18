import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const FullBackground = () => {
  const isTransitioning = useSelector(state => state.project.isTransitioning);

  return <Root active={isTransitioning} />;
};

export default FullBackground;

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.darkPurple};
  opacity: ${props => (props.active ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10;
  transition: 0.3s ease;
`;
