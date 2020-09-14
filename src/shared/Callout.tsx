import React, {useState} from 'react';

export interface CalloutProps {
  /** Should this callout be manually closable from user? **/
  closeable?: boolean;
  /** Condition on which this callout shall be displayed or not **/
  show: boolean;
  /** Which severity to use? **/
  severity?: "SUCCESS" | "WARNING";
  /** The content of the Callout **/
  children: React.ReactNode;
}

export const Callout = ({closeable = false, severity = 'SUCCESS', show, children} : CalloutProps) => {

  // Note: I would not necessarily consider this as a good solution. It might e.g. be worth lifting this state up depending on the requirements
  const [manuallyClosed, setManuallyClosed] = useState(false);
  const handleClose = () => {
    setManuallyClosed(true);
  };

  if (!show || manuallyClosed) {
    return null;
  }

  const color = severity === 'SUCCESS' ? 'green' : 'red';
  return (
    <div style={{ borderWidth: "1", borderStyle: "solid", borderColor: color, padding: 15, color: color}}>
      <p>
        {children}
      </p>
      { closeable && <button onClick={handleClose}>Close forever</button> }
    </div>
  );
};


