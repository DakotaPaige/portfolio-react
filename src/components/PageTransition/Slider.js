import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.$slider = React.createRef();
  }

  static propTypes = {
    animationCallback: PropTypes.func,
    position: PropTypes.string,
    children: PropTypes.object,
    timeout: PropTypes.number,
  };

  componentDidMount() {
    this.$slider.current.addEventListener(
      'animationend',
      this.handleTransitionEnd
    );
  }

  componentWillUnmount() {
    this.$slider.current.removeEventListener(
      'animationend',
      this.handleTransitionEnd
    );
  }

  handleTransitionEnd = () => {
    if (this.props.animationCallback) {
      return this.props.animationCallback();
    }
  };

  render() {
    // can use position to change the animation as page changes. As transition goes from right of page to center, position is TO_LEFT. Then page swaps, and as transition goes from center of page to the left, position is FROM_RIGHT.
    const { position, children, timeout } = this.props;
    return (
      <Root position={position} timeout={timeout} ref={this.$slider}>
        <div className="page-transition" ref={this.$slider} />
        {children}
      </Root>
    );
  }
}

export default Slider;

// const SlideDown = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   100% {
//     transform: translateY(100%);
//   }
// `;

// const SlideUp = keyframes`
//   0% {
//     transform: translateY(100%);
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;

// const SlideDownCss = css`
//   animation: ${SlideDown} ${props => props.timeout}s ease-in-out forwards;
// `;

// const SlideUpCss = css`
//   animation: ${SlideUp} ${props => props.timeout}s ease-in-out forwards;
// `;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeOutCss = css`
  animation: ${FadeOut} ${props => props.timeout}s ease-in-out forwards;
`;

const FadeInCss = css`
  animation: ${FadeIn} ${props => props.timeout}s ease-in-out forwards;
`;

const Root = styled.div`
  ${props => (props.position === 'TO_LEFT' ? FadeOutCss : FadeInCss)};
`;
