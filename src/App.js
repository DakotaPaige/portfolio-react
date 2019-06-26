import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

import { prerenderStyles } from 'src/plugins/prerender';
import routes from 'src/routes';
import SlideOut from 'components/PageTransition/SlideOut';

class App extends Component {
  componentDidMount() {
    prerenderStyles();
  }

  generateRoutes() {
    return routes.map((route, index) => {
      const { path, component } = route;
      const Component = require(`src/${component}`).default;
      return <Route exact path={path} component={Component} key={index} />;
    });
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <Root>
            <TransitionGroup>
              <SlideOut uniqKey={location.pathname} timeout={0.4}>
                <Switch location={location}>{this.generateRoutes()}</Switch>
              </SlideOut>
            </TransitionGroup>
          </Root>
        )}
      />
    );
  }
}

const Root = styled.div`
  .slide-enter-done {
    transform: translateY(0);
  }
  .slide-enter.slide-enter-active {
    transform: translateY(100%);
    transition: all 0.5s;
  }
  .slide-enter-done {
    transform: translateY(0);
  }
  .slide-exit {
    transform: translateY(0);
  }
  .slide-exit.slide-exit-active {
    transform: translateY(100);
    transition: all 0.5s;
  }
`;

export default (process.env.NODE_ENV === 'development'
  ? hot(module)(App)
  : App);
