import React from 'react';
import { Shuffle } from './pages/Shuffle'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import * as colors from "@material-ui/core/colors";
import { atom, Provider } from 'jotai'

const darkTheme = createMuiTheme({
  typography: {
    fontSize: 22,
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#f39800',
    },
    secondary: colors.orange,
  },
});

export const themeAtom = atom(darkTheme);

const App = () => {

  return (
    <Provider>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Shuffle />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
