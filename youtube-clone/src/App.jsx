import React from "react";

import Home from "./Home"
import ThemeProvider from "./componentes/estilo/ThemeProvider";

export default () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
};
