import App, { AppProps, Container } from 'next/app';
import React from 'react';
import withReduxStore, { Store } from '../src/store/with-redux-store';
import { Provider } from 'reactive-react-redux';
import { ThemeProvider, CssBaseline } from '@ui-lib';
import theme from '../src/styles/theme';

interface MyAppProps {
  reduxStore: Store;
}

export default withReduxStore(
  class MyApp extends App<MyAppProps & AppProps> {
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, pageProps, reduxStore } = this.props;
      return (
        <Provider store={reduxStore}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      );
    }
  },
);
