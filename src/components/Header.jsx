import React, { useEffect, useState } from "react";
import {
  AppBar,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { BlurCircular } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: 1,
  },
  appbarIcon: {
    fontSize: "2rem",
    color: "#fff",
  },
  titleColor: {
    color: "#5AFF3D",
  },
  heroTitle: {
    // backdropFilter: "blur(10px)",
    // backgroundColor: "rgba(0,0,0,0.2)",
    padding: "2rem",
    textAlign: "center",
    color: "white",
    fontSize: "3rem",
  },
  goDown: {
    fontSize: "4rem",
    color: "#5AFF3D",
  },
  heroCenter: {
    textAlign: "center",
  },
}));

const Header = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation="0">
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span className={classes.titleColor}>وبسایت</span> من
          </h1>
          <IconButton>
            <SortIcon className={classes.appbarIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.heroCenter}>
          <h1 className={classes.heroTitle}>
            به <span className={classes.titleColor}>وبسایت</span> من خوش اومدی
          </h1>
          <Scroll to={"place-to-visit"} smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};
export default Header;
