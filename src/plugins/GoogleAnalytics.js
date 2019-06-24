import React, { Component } from 'react';
import Script from 'react-load-script';
import { OnUpdate } from 'rrc';

import appConfig from 'src/config/app.conf';

export default class GoogleAnalytics extends Component {
  state = {
    isLoaded: false,
  };

  handleScriptLoad = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    this.setState({ isLoaded: true });
  };

  handleUpdate = location => {
    const gtag = window.gtag;
    if (gtag) {
      gtag('config', appConfig.gtag, {
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  };

  render() {
    return appConfig.gtag ? (
      <>
        <Script
          url={`https://www.googletagmanager.com/gtag/js?id=${appConfig.gtag}`}
          onLoad={this.handleScriptLoad}
        />
        {this.state.isLoaded && <OnUpdate immediate call={this.handleUpdate} />}
      </>
    ) : null;
  }
}
