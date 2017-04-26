import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';

// material-ui imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import { blue, pink } from 'material-ui/styles/colors';

// material-ui requirement
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const dark = false;

const palette = createPalette({
	primary: blue,
	accent: pink,
	type: dark ? 'dark' : 'light',
});

const { styleManager, theme } = MuiThemeProvider.createDefaultContext({
	theme: createMuiTheme({ palette }),
});

const Index = () => (
  <MuiThemeProvider theme={theme} styleManager={styleManager}>
    <Root />
  </MuiThemeProvider>
)

render(
    <Index />
    , document.getElementById('container')
);