import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { amber, grey } from '@material-ui/core/colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import Routes from './routes';

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql'
})

const lightPalette = {
  main: amber[500],
  light: amber[400],
  dark: amber[600]
};

const darkPalette = {
  main: grey[800],
  dark: grey[900],
  light: grey[700]
}

const Root: React.FC = () => {
  const [type, setType] = useState<string>(localStorage.getItem('theme') || 'light');

  const [theme, setTheme] = useState({
    palette: {
      type,
      primary: type === 'light' ? lightPalette : darkPalette,
      secondary: type === 'light' ? grey : amber
    }
  });

  const toggleTheme = () => {
    let paletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    let primaryPalette = theme.palette.primary.main === amber[500] ? darkPalette : lightPalette;
    let secondaryPalette = theme.palette.secondary === amber ? grey : amber;

    setType(paletteType);

    localStorage.setItem('theme', paletteType);

    setTheme({
      palette: {
        type: paletteType,
        primary: primaryPalette,
        secondary: secondaryPalette
      }
    });
  };

  const muiTheme = createMuiTheme(theme as ThemeOptions);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MuiThemeProvider theme={muiTheme}>
          <Routes toggleTheme={toggleTheme} />
        </MuiThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
