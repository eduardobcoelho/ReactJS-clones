import React from "react";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  listItem: {
    paddinTop: 4,
    paddingBottom: 4,
  },
  listItemText: {
    fontSize: 14,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Inicio"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Em Alta"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Inscrições"}
              />
            </ListItem>
          </List>
          <Divider />

          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Biblioteca"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Histórico"}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};
