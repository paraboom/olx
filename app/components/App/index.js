import React from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Layout from "../Layout";

import PageList from "../../pages/PageList";
import PageListItem from "../../pages/PageListItem";

const App = () => (
  <BrowserRouter>
    <Layout>
      <div>Hello</div>
      <Switch>
        <Route exact path="/list" component={PageList} />
        <Route path="/list/aaa" component={PageListItem} />
        <Redirect to="/list" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
