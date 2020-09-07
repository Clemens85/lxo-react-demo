import React from 'react';

export function ExampleInfo(props: any) {
  return (
    <div style={{ border: "1px solid blue", padding: '5px'}}>
      <strong>Example {props.nr}</strong>:  <i>{props.children}</i>
    </div>
  );
}