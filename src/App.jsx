import React from "react";

import AppRoutes from "./routes";

const App = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return <AppRoutes />;
};

export default App;
