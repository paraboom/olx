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

import "./style.css";

const App = () => (
  <BrowserRouter>
    <ApiProvider>
      <Layout>
        <Switch>
          <Route exact path="/list" component={PageList} />
          <Route path="/list/:itemId" component={PageListItem} />
          <Redirect to="/list" />
        </Switch>
      </Layout>
    </ApiProvider>
  </BrowserRouter>
);

export default App;
