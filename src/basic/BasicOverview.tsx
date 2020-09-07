import React from 'react';
import UseStateBasic from "./examples/UseStateBasic";
import FetchDataBasic from "./examples/FetchDataBasic";
import FetchDataOnAction from "./examples/FetchDataOnAction";
import HtmlTitle from "../shared/HtmlTitle";

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
      </>
  );
}