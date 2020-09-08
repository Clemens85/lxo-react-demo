import React from "react";
import HtmlTitle from "../shared/HtmlTitle";
import {FormHandlingBasic} from "./examples/FormHandlingBasic";
import FormHandlingWithValidation from "./examples/FormHandlingWithValidation";

export default function FormOverview() {

  return (
      <>
        <HtmlTitle title="Form Handling Examples"/>
        <section>
          <article>
            <FormHandlingBasic />
          </article>
        </section>
        <hr/>
        <section>
          <article>
            <FormHandlingWithValidation />
          </article>
        </section>
      </>
  );
}