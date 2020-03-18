import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { transitionOut } from 'src/redux/project';

const Single = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'auto';

    setTimeout(() => dispatch(transitionOut()), 400);
  }, []);

  return (
    <Root>
      <h1>Single</h1>
    </Root>
  );
};

export default Single;

const Root = styled.div`
  background-color: ${({ theme }) => theme.color.darkPurple};
  color: white;
  min-height: 100vh;
`;
