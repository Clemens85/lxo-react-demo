import React from "react";
import {formatLocalDate} from "./DateUtils";

export interface LocalDateProps {
  date: any
}
export function LocalDate({date}: LocalDateProps) {
  const formattedDate = formatLocalDate(date);
  return (
      <>{formattedDate ? formattedDate : ''}</>
  );
}