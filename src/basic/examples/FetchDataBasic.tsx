import React from 'react';
import {ExampleInfo} from "../../shared/ExampleInfo";
import {UserDetails} from "../shared/UserDetails";
import {UsersContainer} from "../shared/UsersContainer";
import {User} from "../../shared/UserService";

export default function FetchDataBasic() {
  return (
      <>
        <ExampleInfo nr={2}>
          <span>This example demonstrates data fetching when component is loading, by using an async hook.</span>
          <span>It furthermore shows how to separate fetching logic from display logic</span>
        </ExampleInfo>
        <div style={{marginTop: 15}}>
          <UsersContainer render={users => <SimpleUserList users={users} /> } limit={3} />
        </div>
      </>
  );
};

const SimpleUserList = ({users}: {users: User[]}) => {
  const userDetailsList = users
                            .map(user => <UserDetails key={user.id} user={user} />);
  return (
      <div>{userDetailsList}</div>
  );
};