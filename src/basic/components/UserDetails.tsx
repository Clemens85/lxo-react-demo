import React from "react";
import {User} from "../../shared/user/UserService";


export default function UserDetails(user: User) {
  const {name, email, gender} = user;
  return (
      <div>
        <div><strong>{name}</strong></div>
        <div>{email}</div>
        <div>{gender}</div>
      </div>
  );
}