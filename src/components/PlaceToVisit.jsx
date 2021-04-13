import { makeStyles } from "@material-ui/styles";
import React from "react";
import useWindowPosition from "../hook/useWindowPosition";
import ImageCard from "./ImageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const PlaceToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard checked={checked} />
      <ImageCard checked={checked} />
    </div>
  );
};
export default PlaceToVisit;
