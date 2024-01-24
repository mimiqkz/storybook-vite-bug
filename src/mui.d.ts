import '@mui/material/styles/createPalette'

interface MaterialPalette {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  A100?: string
  A200?: string
  A400?: string
  A700?: string
}

export type PaletteMode = 'light' | 'dark'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    focus: PaletteColor
  }
  interface PaletteOptions {
    focus?: PaletteColorOptions
  }
  interface TypeBackground {
    default: string
    paper: string
    darkestBlue: string
    darkestGreen: string
    darkestCopper: string
  }
  interface TypeText {
    primary: string
    secondary: string
    disabled: string
    complimentary: string
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    filled: true
    outlined: true
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    muted: true
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    display: React.CSSProperties
    heroBody: React.CSSProperties
    currency1: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display?: React.CSSProperties
    heroBody?: React.CSSProperties
    currency1?: React.CSSProperties
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    leftAligned: true
  }
}

declare module '@mui/material/Table' {
  interface TableOwnProps {
    zebra?: boolean
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    large: true
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    large: true
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    gray: true
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true
    heroBody: true
    currency1: true
  }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    colors: {
      blue: MaterialPalette
      coolGrey: MaterialPalette
      warmGrey: MaterialPalette
      copper: MaterialPalette
      mustard: MaterialPalette
      success: MaterialPalette
      error: MaterialPalette
      warning: MaterialPalette
    }
  }
  interface ThemeOptions {
    colors?: {
      blue: MaterialPalette
      coolGrey: MaterialPalette
      warmGrey: MaterialPalette
      copper: MaterialPalette
      mustard: MaterialPalette
      success: MaterialPalette
      error: MaterialPalette
      warning: MaterialPalette
    }
  }
}
