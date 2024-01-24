import createTheme, {ThemeOptions} from '@mui/material/styles/createTheme'
import defaultsDeep from 'lodash/defaultsDeep'

export const shared: ThemeOptions = {
  typography: {
    button: {
      textTransform: 'initial',
    },
    overline: {
      textTransform: 'initial',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      // styleOverrides: {
      //   root: ({theme}) => ({
      //     borderRadius: '8px',
      //     '&.Mui-focusVisible': {
      //       color: theme.palette.focus.contrastText,
      //       backgroundColor: theme.palette.focus.main,
      //     },
      //   }),
      // },
      variants: [
        {
          props: {size: 'small'},
          style: {
            fontSize: 13,
            padding: '8px 16px',
          },
        },
        {
          props: {size: 'medium'},
          style: {
            fontSize: 14,
            padding: '12px 24px',
          },
        },
        {
          props: {size: 'large'},
          style: {
            fontSize: 16,
            padding: '16px 32px',
          },
        },
        {
          props: {variant: 'leftAligned'},
          style: {
            transform: 'translateX(-24px)',
            transition:
              '200ms transform ease-out, 330ms background-color ease-out',
            '&:hover, &:focus': {
              transform: 'translateX(0px)',
            },
            '&:hover:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: -24,
              width: '24px',
              height: '100%',
              backgroundColor: 'transparent',
            },
          },
        },
      ],
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
}

export const createSharedTheme = (theme: ThemeOptions) => {
  return createTheme(defaultsDeep(theme, shared) as ThemeOptions)
}
