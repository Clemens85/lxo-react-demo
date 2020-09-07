import React from 'react';
import {useAsyncCallback} from "react-async-hook";

export interface AsyncButtonProps {
  children: React.ReactNode;
  onClick: (...args: any[]) => unknown;
  disabled?: boolean;
}

export function AsyncButton({onClick, disabled = false, children}: AsyncButtonProps) {

  const asyncOnClick = useAsyncCallback(onClick);
  return (
      <button disabled={disabled || asyncOnClick.loading} onClick={asyncOnClick.execute}>
        { children }
      </button>
  );
}