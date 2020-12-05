import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from '../lib/redux-store';
import { Provider } from 'react-redux';

class _App extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <React.Fragment>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    )
  }
}

export default withReduxStore(_App)
