import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
function Header() {
  return (
      <Box className="header" component={"header"} sx={{ width: 1 }}>
        <img src="img/logo.png" alt="Nexter Logo" className="header__logo" />
        <h3 className="u-heading-3 u-heading--light">خانه خودتان:</h3>
        <h1 className="u-heading-1">با خرید خانه نهایت آزادی را احساس کنید</h1>
        
        <Button sx={{color:"white"}} variant="contained">املاک ما را مشاهده کنید</Button>
        <p className="seeon__text">دیده می شود در</p>
        <figure className="seeon__box-img">
          <img src="img/logo-bbc.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-bi.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-forbes.png" alt="BBC" className="seeon__img" />
          <img src="img/logo-techcrunch.png" alt="BBC" className="seeon__img" />
        </figure>
      </Box>
  );
}

export default Header;
