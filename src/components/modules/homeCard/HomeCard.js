import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
function HomeCard({children,homes}) {
  const {push} = useRouter();
  return (
    <Box
      component={"section"}
      sx={{
        mt: "160px !important",
        gridColumn: " center-start / center-end ",
        width: "100% !imoportant",
        mb: "30px",
      }}
    >
{children && children[0]}
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"
      >
        {homes &&
          homes.map((home) => {
            return (
              <Grid
                key={home.id}
                item
                xs={12}
                sx={{
                  marginX: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
                sm={6}
                lg={4}
              >
                <Card className="" sx={{ maxWidth: 300, minHeight: 320 }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={home.img}
                    alt="green iguana"
                  />
                  <CardContent sx={{ m: "auto", fontFamily: "Dana-Bold" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h5 className="card__title">{home.title}</h5>
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
                          <p className="card__text">{home.citry}</p>
                        </Grid>
                        <Grid item xs={6}>
                          <p className="card__text">{home.roomCount} اتاق</p>
                        </Grid>
                        <Grid item xs={6}>
                          <p className="card__text">{home.meterage} متر مربع</p>
                        </Grid>
                        <Grid item xs={6}>
                          <p className="card__text">
                            {home.price.toLocaleString()} میلیون تومان
                          </p>
                        </Grid>
                      </Grid>
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                    onClick={()=>push(`All_homes/${home.id}`)}
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
            );
          })}
          {children && children[1]}
      </Grid>
    </Box>
  );
}

export default HomeCard;
