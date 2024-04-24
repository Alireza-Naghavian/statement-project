import React from 'react'
import Box from "@mui/material/Box";
import Button from '@mui/material/Button'
function Story_section() {
  return (
<>

<div className="story__pictures">
    <img
        src="/img/story-1.jpeg"
        alt="Couple happy for new house"
        className="story__img-1"
    />
    <img
        src="/img/story-2.jpeg"
        alt="New house"
        className="story__img-2"
    />
</div>

<div className="story__content">
    <h3 className="u-heading--light u-heading-3">مشتریان خوشحال</h3>
    <h2 className="u-heading--dark u-heading-2 u-my-small">
        &rdquo;بهترین تصمیم زندگی ما&ldquo;
    </h2>
    <p className="story__text u-mb-medium">
        متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن
        فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان
        وب و گرافیک از این متن برای پرکردن
    </p>
    <Button variant="contained" sx={{color:"white"}}>
      خانه خود را پیدا کنید
    </Button>
</div>
</>
  )
}

export default Story_section