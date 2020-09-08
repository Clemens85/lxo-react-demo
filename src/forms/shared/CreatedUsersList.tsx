import React from "react";
import {User} from "../../shared/UserService";

export interface CreatedUsersListProps {
  users: User[];
}
export function CreatedUsersList({users} : CreatedUsersListProps) {

  if (users.length === 0) {
    return <div>No users created since this form was opened.</div>
  }

  const userRows = users.map(user => <UserRow key={user.id} {...user}></UserRow>);

  return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userRows}
          </tbody>
        </table>
      </div>
  );
}

function UserRow(user: User) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>{user.status}</td>
    </tr>
  );
}