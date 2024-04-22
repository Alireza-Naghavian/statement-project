import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid } from "@mui/material";
import Box from "@mui/material/Box";
function HomeCard() {
  return (
    <Box
      component={"section"}
      sx={{
        mt: "160px !important",
        gridColumn: " center-start / center-end ",
       width:"100% !imoportant",
   
        mb: "30px",
        
      }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
       
        wrap="wrap"
      >
        <Grid item xs={12} sx={{marginX:"auto",display:"flex" ,justifyContent:"center"}} sm={6} lg={4}>
          <Card className="" sx={{ maxWidth: 300, minHeight: 370 }}>
            <CardMedia
              component="img"
              height="240"
              image="img/gal-2.jpeg"
              alt="green iguana"
            />
            <CardContent sx={{ m: "auto", fontFamily: "Dana-Bold" }}>
              <Typography gutterBottom variant="h5" component="div">
                <h5 className="card__title">آپارتمان خانوادگی مدرن</h5>
              </Typography>
              <Typography variant="div" color="text.secondary">
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="wrap"
                >
                  <Grid item xs={6}>
                    <p className="card__text">مالدیو</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">4 اتاق</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">400 متر مربع</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">560 میلیون تومان</p>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                sx={{
                  width: 1,
                  color: "white",
                }}
                size="small"
                color="primary"
              >
                مشاهده ملک
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{marginX:"auto",display:"flex" ,justifyContent:"center"}} sm={6} lg={4}>
          <Card className="" sx={{ maxWidth: 300, minHeight: 370 }}>
            <CardMedia
              component="img"
              height="240"
              image="img/gal-2.jpeg"
              alt="green iguana"
            />
            <CardContent sx={{ m: "auto", fontFamily: "Dana-Bold" }}>
              <Typography gutterBottom variant="h5" component="div">
                <h5 className="card__title">آپارتمان خانوادگی مدرن</h5>
              </Typography>
              <Typography variant="div" color="text.secondary">
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="wrap"
                >
                  <Grid item xs={6}>
                    <p className="card__text">مالدیو</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">4 اتاق</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">400 متر مربع</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">560 میلیون تومان</p>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                sx={{
                  width: 1,
                  color: "white",
                }}
                size="small"
                color="primary"
              >
                مشاهده ملک
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{marginX:"auto",display:"flex" ,justifyContent:"center"}} sm={6} lg={4}>
          <Card className="" sx={{ maxWidth: 300, minHeight: 370 }}>
            <CardMedia
              component="img"
              height="240"
              image="img/gal-2.jpeg"
              alt="green iguana"
            />
            <CardContent sx={{ m: "auto", fontFamily: "Dana-Bold" }}>
              <Typography gutterBottom variant="h5" component="div">
                <h5 className="card__title">آپارتمان خانوادگی مدرن</h5>
              </Typography>
              <Typography variant="div" color="text.secondary">
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="wrap"
                >
                  <Grid item xs={6}>
                    <p className="card__text">مالدیو</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">4 اتاق</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">400 متر مربع</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">560 میلیون تومان</p>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                sx={{
                  width: 1,
                  color: "white",
                }}
                size="small"
                color="primary"
              >
                مشاهده ملک
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{marginX:"auto",display:"flex" ,justifyContent:"center"}} sm={6} lg={4}>
          <Card className="" sx={{ maxWidth: 300, minHeight: 370 }}>
            <CardMedia
              component="img"
              height="240"
              image="img/gal-2.jpeg"
              alt="green iguana"
            />
            <CardContent sx={{ m: "auto", fontFamily: "Dana-Bold" }}>
              <Typography gutterBottom variant="h5" component="div">
                <h5 className="card__title">آپارتمان خانوادگی مدرن</h5>
              </Typography>
              <Typography variant="div" color="text.secondary">
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="wrap"
                >
                  <Grid item xs={6}>
                    <p className="card__text">مالدیو</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">4 اتاق</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">400 متر مربع</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">560 میلیون تومان</p>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                sx={{
                  width: 1,
                  color: "white",
                }}
                size="small"
                color="primary"
              >
                مشاهده ملک
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{marginX:"auto",display:"flex" ,justifyContent:"center"}} sm={6} lg={4}>
          <Card className="" sx={{ maxWidth: 300, minHeight: 370 }}>
            <CardMedia
              component="img"
              height="240"
              image="img/gal-2.jpeg"
              alt="green iguana"
            />
            <CardContent sx={{ m: "auto", fontFamily: "Dana-Bold" }}>
              <Typography gutterBottom variant="h5" component="div">
                <h5 className="card__title">آپارتمان خانوادگی مدرن</h5>
              </Typography>
              <Typography variant="div" color="text.secondary">
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="wrap"
                >
                  <Grid item xs={6}>
                    <p className="card__text">مالدیو</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">4 اتاق</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">400 متر مربع</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">560 میلیون تومان</p>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                sx={{
                  width: 1,
                  color: "white",
                }}
                size="small"
                color="primary"
              >
                مشاهده ملک
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{marginX:"auto",display:"flex" ,justifyContent:"center"}} sm={6} lg={4}>
          <Card className="" sx={{ maxWidth: 300, minHeight: 370 }}>
            <CardMedia
              component="img"
              height="240"
              image="img/gal-2.jpeg"
              alt="green iguana"
            />
            <CardContent sx={{ m: "auto", fontFamily: "Dana-Bold" }}>
              <Typography gutterBottom variant="h5" component="div">
                <h5 className="card__title">آپارتمان خانوادگی مدرن</h5>
              </Typography>
              <Typography variant="div" color="text.secondary">
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="wrap"
                >
                  <Grid item xs={6}>
                    <p className="card__text">مالدیو</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">4 اتاق</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">400 متر مربع</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className="card__text">560 میلیون تومان</p>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                sx={{
                  width: 1,
                  color: "white",
                }}
                size="small"
                color="primary"
              >
                مشاهده ملک
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeCard;
