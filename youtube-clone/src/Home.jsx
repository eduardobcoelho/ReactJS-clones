import React from "react";
import { AppBar, makeStyles } from "@material-ui/core";

import TopBar from "./componentes/estilo/TopBar";
import NavBar from "./componentes/estilo/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "#F5F5F5",
  },
}));

export default () => {
  const Classes = useStyles();
  return (
    <div className={Classes.root}>
      <TopBar />
      <NavBar />
    </div>
  );
};
