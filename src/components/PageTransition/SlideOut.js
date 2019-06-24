import React, { Component } from 'react';
import Slider from './Slider';
import PropTypes from 'prop-types';

class PageSlideOut extends Component {
  constructor(props) {
    super(props);

    this.Slider = {
      CENTER: 'CENTER',
      TO_LEFT: 'TO_LEFT',
      TO_RIGHT: 'TO_RIGHT',
      FROM_LEFT: 'FROM_LEFT',
      FROM_RIGHT: 'FROM_RIGHT',
    };

    this.state = {
      childPosition: this.Slider.CENTER,
      curChild: props.children,
      curUniqId: props.uniqId,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null,
    };
  }

  static propTypes = {
    uniqKey: PropTypes.string,
    uniqId: PropTypes.string,
    children: PropTypes.object,
    timeout: PropTypes.number,
  };

  static defaultProps = {
    timeout: 0.3,
  };

  componentDidUpdate(prevProps, prevState) {
    // When the component updates, it sets the state with the prevChild (prev page). If thats set, the component will stay rendering the previous page until the first animation (bringing the transition overlay from the right to the center) is finished. Then, it will use the animationCallback funcition and swap the page thats rendering to the current page,and continue the next animation (moving the transition overlay from the center to the left).
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    const uniqId = this.props.uniqKey || this.props.children.type;
    if (prevUniqId !== uniqId) {
      this.setState({
        childPosition: this.Slider.TO_LEFT,
        curChild: this.props.children,
        curUniqId: uniqId,
        prevChild: prevProps.children,
        prevUniqId,
        animationCallback: this.swapChildren,
      });
    }
  }

  swapChildren = () => {
    this.setState({
      childPosition: this.Slider.FROM_RIGHT,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null,
    });
  };

  render() {
    return (
      <Slider
        position={this.state.childPosition}
        animationCallback={this.state.animationCallback}
        timeout={this.props.timeout}
      >
        {this.state.prevChild || this.state.curChild}
      </Slider>
    );
  }
}

export default PageSlideOut;
