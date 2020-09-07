import {format} from 'date-fns';

export function formatLocalDate(date: any): string {
  if (!date) {
    return '';
  }
  const jsDate = toJsDate(date);
  return format(jsDate, 'dd.MM.yyyy');
}

export function formatTime(date: any): string {
  if (!date) {
    return '';
  }
  const jsDate = toJsDate(date);
  return format(jsDate, 'HH:mm:ss');
}

function toJsDate(dateStr: string): Date {
  return new Date(dateStr);
}