import React from "react";
import {formatTime} from "./DateUtils";

export interface TimeProps {
  date: any;
  suffix?: boolean;
}
export function Time({date, suffix= true}: TimeProps) {
  const formattedTime = formatTime(date);
  return (
      <>{formattedTime}{suffix && ' Uhr'}</>
  );
}
