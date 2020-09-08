import React from "react";
import {useFormContext} from "react-hook-form";

export interface GenderSelectControlProps {
  name: string
}
export function GenderSelectControl({name} : GenderSelectControlProps) {

  const {register, watch} = useFormContext();

  const selectedGender = watch(name);

  return (
      <>
        <label htmlFor={name}>Gender</label>
        <select id={name} name={name} ref={register}>
          <option value="Female">Weiblich</option>
          <option value="Male">Männlich</option>
        </select>
        <span>Selected gender value is {selectedGender}</span>
      </>
  );
}
