import {AxiosResponse} from "axios";
import {Issue} from "./Issue";

export interface FormValidationError {
  name: string;
  message: string;
  type: string;
}

export function mapIssuesToFormValidationErrors(errorResponse: AxiosResponse): FormValidationError[] {

  let result = new Array<FormValidationError>();

  if (errorResponse.status !== 406) {
    return result;
  }
  if (errorResponse.data.issues && errorResponse.data.issues.length > 0) {
    const issues = errorResponse.data.issues as Issue[];
    result = issues.map(issue => ({name: issue.source,
                                   message: issue.i18nKey,
                                   type: 'backend'}));
  }
  return result;
}
