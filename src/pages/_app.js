import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import RealTor from "@/components/ui/RealTor";
import SideBar from "@/components/ui/SideBar";
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#c69963",
          width: "20rem",
          height: "5rem",
          outline: "none",
          border: "none",
          borderRadius: "0px",
          fontFamily: "Dana-Bold",
          fontSize: "1.6rem",
          transition: "all .4s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          "&:hover": {
            backgroundColor: "#b28451",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#f9f7f6",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          position: "relative",
          gridRowGap: "3rem",
        },
      },
    },
  },
});
export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <div className="container">
          <SideBar />
          <Header />
          <RealTor />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
