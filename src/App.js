import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    maxWidth: "100vw",
    background: `url(${process.env.PUBLIC_URL + "/images/v-bg-svg.svg"})`,
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}

export default App;
