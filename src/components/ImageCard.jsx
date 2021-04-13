import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
    backdropFilter: "blur(4px)",
    "&:hover": {
      "& $media": {
        transform: "scale(1.1)",
      },
    },
  },
  media: {
    height: 350,
    transition: "all 200ms linear",
  },
  mediaDiv: {
    overflow: "hidden",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",
  },
  desc: {
    fontSize: "1.1rem",
    color: "#fff",
  },
});

export default function ImageCard({ checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.mediaDiv}>
            <CardMedia
              className={classes.media}
              image={process.env.PUBLIC_URL + "/images/banner2.jpg"}
              title="تصویر جزیره"
            />
          </div>
          <CardContent>
            <Typography gutterBottom component="h1" className={classes.title}>
              جزیره
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              لورم ایپسوم متن ساختگی در مورد ایم جزیره و لورم ایپسوم متن ساختگی
              در مورد ایم جزیره و
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Collapse>
  );
}
