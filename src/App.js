import React from "react";
import "./App.css";
import Menu from "./component/Menu";
import { Route } from "react-router";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
}

export default App;
