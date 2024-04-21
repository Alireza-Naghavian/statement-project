import "@/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#c69963",
      dark: "#b28451",
      light_gray_shade: "#f9f7f6",
      dark_gray_shade: "#6d5d4b",
    },
    secondary: {
      main: "#101d2c",
      light: "#101d2cef",
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 560,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1440,
    },
  },
});
export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
