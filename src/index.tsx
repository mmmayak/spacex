import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { amber, green, grey, lightGreen, cyan, teal } from '@material-ui/core/colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

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
    <MuiThemeProvider theme={muiTheme}>
      <App changeTheme={toggleTheme} />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
