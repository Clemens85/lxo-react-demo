import React from 'react';

export interface ExampleInfoProps {
  nr: number,
  children: React.ReactNode,
  helpLinks?: string[]
}
export function ExampleInfo({nr, helpLinks = [], children}: ExampleInfoProps) {

  function renderHelpLinks() {
    if (helpLinks?.length > 0) {
      const helpLinkListItems = helpLinks.map(helpLink => <li key={helpLink}><a href={helpLink} target="_blank" rel="noopener noreferrer">{helpLink}</a></li>);
      return (
        <div style={{ paddingTop: '5px' }}>
          <strong>Helpful Links:</strong>
          <ul style={{ marginTop: 0}}>
            {helpLinkListItems}
          </ul>
        </div>
      );
    }
  }

  return (
    <div style={{ border: "1px solid blue", padding: '5px'}}>
      <strong>Example {nr}</strong>:  <i>{children}</i>
      {renderHelpLinks()}
    </div>
  );
}