import React from "react";
import HtmlTitle from "../shared/HtmlTitle";
import {ShoppingCartExample} from "./examples/ShoppingCartExample";
import {ExampleInfo} from "../shared/ExampleInfo";

export default function ReduxOverview() {
  return (
      <>
        <HtmlTitle title="Redux Toolkit Example"/>
        <section>
          <ExampleInfo nr={1}>
            Showing redux in an example is quite complicated due to it needs some more complex logic for showing its purposes. This example demonstrates a simple
            shopping cart and is inspired by the redux website. But we use the Redux toolkit library which allows us to use Redux in a more simpler way
            without writing dozens of boilerplate code which is normally needed to setup redux.<br/>
            <strong>Note: </strong>Redux is not quite easy, so it is always reasonable to re-think if you really need it in your app!
          </ExampleInfo>
          <ShoppingCartExample />
        </section>
      </>
  );
}