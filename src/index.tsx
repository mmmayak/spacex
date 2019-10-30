import React, { useState } from 'react';
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

const Root: React.FC = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: 'light',
      primary: { main: amber[500], light: amber[400], dark: amber[600] },
      secondary: grey
    },
  });

  const toggleTheme = () => {
    let paletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    let primaryPalette = theme.palette.primary.main === amber[500] ? { main: grey[800], dark: grey[900], light: grey[700] } : { main: amber[500], light: amber[400], dark: amber[600] };
    let secondaryPalette = theme.palette.secondary === amber ? grey : amber;
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
          <Routes changeTheme={toggleTheme} />
        </MuiThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
