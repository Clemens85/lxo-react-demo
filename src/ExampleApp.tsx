import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter, NavLink
} from "react-router-dom";
import BasicOverview from "./basic/BasicOverview";
import FormOverview from "./forms/FormOverview";
import { HelmetProvider } from 'react-helmet-async';

function ExampleApp() {
  return (
      <HelmetProvider>
        <BrowserRouter>
          <header><NavBar/></header>
          <main>
            <Switch>
              <Route path="/forms">
                <FormOverview/>
              </Route>
              <Route path="/">
                <BasicOverview/>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </HelmetProvider>
  );
}

function NavBar() {
  return (
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName='navLinkActive' exact={true}>React Basic Examples</NavLink></li>
          <li><NavLink to="/forms" activeClassName='navLinkActive' exact={true}>Form Handling</NavLink></li>
        </ul>
      </nav>
  );
}


export default ExampleApp;
