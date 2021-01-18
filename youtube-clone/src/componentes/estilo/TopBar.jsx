import React from "react";

import {
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCall from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: "1",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  ytbLogo: {
    height: "24px",
  },
  menuIcon: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  icons: {
    marginRight: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src="./images/preto.png"
            alt="Logo YouTube"
            className={classes.ytbLogo}
          />
          <div className={classes.grow}></div>

          <IconButton className={classes.icons} color="inherit">
            <VideoCall />
          </IconButton>

          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>

          <IconButton className={classes.icons} color="inherit">
            <NotificationsIcon />
          </IconButton>

          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircleIcon />}
          >
            Fazer login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
