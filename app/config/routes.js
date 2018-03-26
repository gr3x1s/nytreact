import Main from "../components/Main.js";
import React from "react";
import {Route, BrowserRouter} from "react-router-dom";


module.exports = (

  <BrowserRouter>
      <Route path="/" component={Main}>
      </Route>
  </BrowserRouter>

);
