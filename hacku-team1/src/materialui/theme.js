import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
  typography:{
    fontFamily:"Noto Sans JP",
    h2: {
      fontSize: "24px",
      "@media (max-width:600px)": {
        fontSize: "20px",
      },
    },
    body1: {
      fontSize: "20px",
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
  },
  palette: {
    primary: {
      light: '#f17d80',
      main: '#bb4d54',
      dark: '#861c2b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#e2e2e2',
      dark: '#b0b0b0',
      contrastText: '#000000',
    },
  },
})