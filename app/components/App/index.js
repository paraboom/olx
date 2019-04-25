import React from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Layout from "../Layout";
import { ApiProvider } from "../../utils/api";

import PageList from "../../pages/PageList";
import PageListItem from "../../pages/PageListItem";

const App = () => (
  <BrowserRouter>
    <ApiProvider>
      <Layout>
        <div>Hello</div>
        <Switch>
          <Route exact path="/list" component={PageList} />
          <Route path="/list/aaa" component={PageListItem} />
          <Redirect to="/list" />
        </Switch>
      </Layout>
    </ApiProvider>
  </BrowserRouter>
);

export default App;
