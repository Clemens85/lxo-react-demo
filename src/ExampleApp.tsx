import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter, NavLink
} from "react-router-dom";
import BasicOverview from "./basic/BasicOverview";
import FormOverview from "./forms/FormOverview";
import GetStarted from "./start/GetStarted"
import { HelmetProvider } from 'react-helmet-async';
import ReduxOverview from "./redux/ReduxOverview";
import I18nOverview from "./i18n/I18nOverview";

function ExampleApp() {
  return (
      <HelmetProvider>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
          <main>
            <Switch>
              <Route path="/forms">
                <FormOverview/>
              </Route>
              <Route path="/redux">
                <ReduxOverview />
              </Route>
              <Route path="/i18n">
                <I18nOverview />
              </Route>
              <Route path="/basic">
                <BasicOverview/>
              </Route>
              <Route path="/">
                <GetStarted/>
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
          <li><NavLink to="/" activeClassName='navLinkActive' exact={true}>Get Started</NavLink></li>
          <li><NavLink to="/basic" activeClassName='navLinkActive' exact={true}>Basic Examples</NavLink></li>
          <li><NavLink to="/forms" activeClassName='navLinkActive' exact={true}>Form Handling</NavLink></li>
          <li><NavLink to="/redux" activeClassName='navLinkActive' exact={true}>Redux Toolkit</NavLink></li>
          <li><NavLink to="/i18n" activeClassName='navLinkActive' exact={true}>i18n</NavLink></li>
        </ul>
      </nav>
  );
}


export default ExampleApp;
