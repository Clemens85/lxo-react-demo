import {useFormContext} from "react-hook-form";
import React from "react";

export interface TextInputProps extends React.ComponentProps<"input"> {
  name: string;
  label: string;
}
export function TextInput({name, label, ...inputProps} : TextInputProps) {

  const {register, errors} = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
      <>
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} id={name} ref={register} {... inputProps} />
        {errorMessage && <span style={{ color: 'red'}}>{errorMessage}</span> }
      </>
  );
}
