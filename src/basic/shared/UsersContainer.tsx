import React from "react";
import {useAsync} from "react-async-hook";
import {Callout} from "../../shared/Callout";
import {findUsersAsync, User} from "../../shared/UserService";

export type UsersContainerProps = {
  render(users: User[]): React.ReactElement;
  limit?: number;
}

export const UsersContainer = ({render, limit}: UsersContainerProps) => {
  const asyncResult = useAsync(findUsersAsync, [limit]);
  const { loading, result, error } = asyncResult;

  if (loading) {
    return <div><strong>Loading data...</strong></div>;
  }
  if (error) {
    return <Callout show={true} closeable={true}>Error during loading data!</Callout>
  }
  return render(result as User[]);
};