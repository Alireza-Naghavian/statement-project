import React from "react";
import Box from "@mui/material/Box";
function RealTor() {
  const bestRealTor = [
    {
      id: 1,
      avatarSrc: "/img/realtor-1.jpeg",
      name: "مهدی ایلخانی نسب",
      sell: 869,
    },
    { id: 2, avatarSrc: "/img/realtor-2.jpeg", name: "کوثر بهشتی", sell: 243 },
    { id: 3, avatarSrc: "/img/realtor-3.jpeg", name: "ارشیا حسینی", sell: 130 },
  ];
  return (
    <Box className="real-tors" >
      <p className="real-tors__tittle">سه مالک برتر</p>
      {bestRealTor &&
        bestRealTor.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0px 12px",
                justifyContent: "center"}}>
              <img
                src={item.avatarSrc}
                alt="real-tors top 1"
                className="real-tors__img"
              />
              <Box className="real-tors__details" sx={{
                width:"170px",
                display:"flex",
                flexDirection:"column",
                gap:"8px 0px"
              }}>
                <h3 className="u-heading-3 u-heading--white">{item.name}</h3>
                <p className="real-tors__text">{item.sell} فروش خانه</p>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
}

export default RealTor;
