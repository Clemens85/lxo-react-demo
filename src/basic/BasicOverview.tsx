import React from 'react';
import UseStateBasic from "./examples/UseStateBasic";
import FetchDataBasic from "./examples/FetchDataBasic";
import FetchDataOnAction from "./examples/FetchDataOnAction";
import HtmlTitle from "../shared/HtmlTitle";
import {ExampleInfo} from "../shared/ExampleInfo";

export default function BasicOverview() {

  return (
      <>
        <HtmlTitle title="Basic React Examples" />
        <section>
          <aside>
            <UseStateBasic/>
          </aside>
          <aside>
            <FetchDataBasic/>
          </aside>
        </section>
        <hr/>
        <section>
          <FetchDataOnAction/>
        </section>
        <hr/>
        <section>
          <ExampleInfo nr={4}>
            This is no example to be shown in here, but take a look at <strong>Callout.spec.tsx</strong> which shows how to write tests for React components by
            using the React Testing-Library, which adds some very handy and powerful functions on top of the pure React testing functions.
          </ExampleInfo>
        </section>
      </>
  );
}