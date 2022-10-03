import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import Contact from "./Contact";
import "./app.css";
const ApplyForm = lazy(() => import("./ApplyForm"));
// import { Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavigationMenu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/apply" component={ApplyForm} />
        </Suspense>
      </Switch>
    </>
  );
};

export default App;
