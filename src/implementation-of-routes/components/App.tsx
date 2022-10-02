import React from "react";
import { Route, Switch } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import Contact from "./Contact";
import "./app.css";
import SimpleForm from "./Form";
// import { Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavigationMenu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/apply" component={SimpleForm} />
      </Switch>

      {/* <Home />
      <Contact /> */}
    </>
  );
};

export default App;
