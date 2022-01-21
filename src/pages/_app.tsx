import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import { LocalStorageProvider } from '../hooks/useLocalStorage';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LocalStorageProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </LocalStorageProvider>
  );
};

export default MyApp;
