import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import createTheme from '@mui/material/styles/createTheme';
import { themes } from '@storybook/theming';

import '@fontsource/material-icons';
import { shared } from '../src/shared.theme';


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  sidebar: {
    showRoots: false,
  },
  docs: {
    theme: themes.light,
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    ['theme']: responsiveFontSizes(createTheme(shared)),
  },
  defaultTheme: 'theme',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];
