import React, { useEffect, useState } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import client from '../services/apolloClient';
import "../src/companents/navbar/Navbar.module.css"
import ShopContextProvide from '../src/context/ShopContext'



config.autoAddCss = false;


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.background};
    font-family: 'Rajdhani', sans-serif;
    min-height: 100vh;
  }

  #__next{
    padding-bottom: 72px;
  }
`;


function Theme({ children }){
  const [theme, setTheme] = useState({
    light_mode: true,
    assets: {
      logo: '/logo.png',
      light_logo: '/light-logo.svg',
      dark_logo: '/dark-logo.svg',
    },
    colors: {
      background: '#fff',
      primary: '#7d68ab',
      secondary: '#000',
      alert: '#ee4899',
    },
  });

  return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
  );
}


function MyApp({ Component, pageProps }) {
  return (
    <ShopContextProvide>
      <ApolloProvider client={client}>
          <Theme>
            <GlobalStyle/>
            <ToastContainer
                position='top-right'
                hideProgressBar={false}
                pauseOnFocusLoss={false}
                pauseOnHover
            />
            <Component {...pageProps} />
          </Theme>
      </ApolloProvider>
      </ShopContextProvide>
  )
}

export default MyApp