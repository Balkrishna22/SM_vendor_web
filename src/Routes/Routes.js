import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import { Switch, Route } from "react-router-dom";
import IndexPolicies from "../Policies/IndexPolicies";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/feature" component={About} />
      <Route exact path="/policies" component={IndexPolicies} />

      {/* <Route exact path="/Home" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/edit-user/:id" component={FormEdit} /> */}
    </Switch>
  );
}
