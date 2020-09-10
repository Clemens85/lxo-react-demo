import React from "react";
import HtmlTitle from "../shared/HtmlTitle";
import {ShoppingCartExample} from "./examples/ShoppingCartExample";
import {ExampleInfo} from "../shared/ExampleInfo";

export default function ReduxOverview() {
  return (
      <>
        <HtmlTitle title="Redux Toolkit Example"/>
        <section>
          <ExampleInfo nr={1}
                       helpLinks={[
                           "https://redux-toolkit.js.org/",
                           "https://blog.codecentric.de/2020/02/einfacheres-redux-mit-dem-redux-toolkit/",
                           "https://kentcdodds.com/blog/application-state-management-with-react",
                           "https://www.taniarascia.com/redux-react-guide/",
                           "https://tsh.io/blog/react-state-management-react-hooks-vs-redux/"]}>
            Showing redux in an example is quite complicated due to it needs some more complex logic for showing its purposes. This example demonstrates a simple
            shopping cart and is inspired by the redux website. But we use the Redux toolkit library which allows us to use Redux in a more simpler way
            without writing dozens of boilerplate code which is normally needed to setup redux.<br/>
            By using a logging middleware the complete redux state flow can be seen in browser console.<br />
            <strong>Note: </strong>Redux is not quite easy, so it is always reasonable to re-think if you really need it in your app.
          </ExampleInfo>
          <ShoppingCartExample />
        </section>
      </>
  );
}