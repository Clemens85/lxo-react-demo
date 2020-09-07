import React, {useState} from 'react';
import {Callout} from "../../shared/Callout";
import {ExampleInfo} from "../../shared/ExampleInfo";

export default function UseStateBasic() {

  const CLICK_LIMIT_FOR_SHOWING_ALERT = 3;

  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  const reamainingClicks = CLICK_LIMIT_FOR_SHOWING_ALERT - counter;
  const showAlert = counter >= CLICK_LIMIT_FOR_SHOWING_ALERT;

  return (
      <div>
        <ExampleInfo nr={1}>
          Basic demo showing simple usage of useState by using a component that is shown when a certain condition is met.
          It furthermore demonstrates how small (UI) components could be created (-> Callout)
        </ExampleInfo>
        <div>
          <button onClick={handleClick}>Increase Counter</button>
          <p>Current count: <strong>{counter}</strong>.</p>
            { !showAlert && <p>You need still <strong>{reamainingClicks}</strong> for showing callout.</p> }
        </div>
        <Callout show={showAlert} severity="WARNING" closeable={true}>
          This callout is shown due to you clicked at least {CLICK_LIMIT_FOR_SHOWING_ALERT} times on the button.
        </Callout>
      </div>
  );
}



