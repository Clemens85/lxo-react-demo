import React from 'react';

export interface ExampleInfoProps {
  nr: number,
  children: React.ReactNode
}
export function ExampleInfo({nr, children}: ExampleInfoProps) {
  return (
    <div style={{ border: "1px solid blue", padding: '5px'}}>
      <strong>Example {nr}</strong>:  <i>{children}</i>
    </div>
  );
}