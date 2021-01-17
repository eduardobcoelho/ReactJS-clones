import React from "react";
import { makeStyles } from "@material-ui/core";

import TopBar from "./componentes/estilo/TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default () => {
  const Classes = useStyles();
  return (
    <div className={Classes.root}>
      <TopBar />
    </div>
  );
};
