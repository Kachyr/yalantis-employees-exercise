import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import  Employees  from "./pages/Employees.jsx";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <hr />
        <div className="container pt-4">
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/employees"} exact component={Employees} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
