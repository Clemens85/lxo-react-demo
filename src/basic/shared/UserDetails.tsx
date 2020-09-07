import React from "react";
import {User} from "../../shared/UserService";

export const UserDetails: React.FC<{user: User}> = ({user}) => {
  const {name, email, gender} = user;
  return (
      <div>
        <div><strong>{name}</strong></div>
        <div>{email}</div>
        <div>{gender}</div>
      </div>
  );
};