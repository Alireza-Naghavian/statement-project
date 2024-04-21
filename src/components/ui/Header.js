import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function Header() {
  const theme = createTheme({
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
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box className="header" component={"header"} sx={{ width: 1 }}>
        <img src="img/logo.png" alt="Nexter Logo" className="header__logo" />
        <h3 className="u-heading-3 u-heading--light">خانه خودتان:</h3>
        <h1 className="u-heading-1">با خرید خانه نهایت آزادی را احساس کنید</h1>

        <Button variant="contained">املاک ما را مشاهده کنید</Button>
        <p className="seeon__text">دیده می شود در</p>
        <figure className="seeon__box-img">
          <img src="img/logo-bbc.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-bi.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-forbes.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-techcrunch.png" alt="BBC" className="seeon__img" />
        </figure>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
