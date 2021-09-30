import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../Components/Footer/Index";
import Layout from "../Components/layout";
import CreateAndEdit from "../Pages/Products/CreateAndEdit/Index";
import List from "../Pages/Products/List/Index";

export default function Routes() {
  return (
    <Router>
      {}
      <Switch>
        <Route path="/produtos/colidos">
          <Layout>
            <CreateAndEdit />
          </Layout>
        </Route>
        <Route path="/produtos/editar/:id=" exact>
          <Layout>
            <CreateAndEdit />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <List />
          </Layout>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}
