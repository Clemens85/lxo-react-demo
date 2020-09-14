import React from 'react';
import {ExampleInfo} from "../../shared/ExampleInfo";
import UserDetails from "../components/UserDetails";
import {UsersContainer} from "../components/UsersContainer";
import {User} from "../../shared/user/UserService";

export default function FetchDataBasic() {
  return (
      <>
        <ExampleInfo nr={2} helpLinks={[
            "https://blog.logrocket.com/lifecycle-methods-with-the-useeffect-hook/",
            "https://softchris.github.io/books/react/render-props/",
            "https://kentcdodds.com/blog/inversion-of-control"
        ]}>
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
                            .map(user => <UserDetails key={user.id} {...user} />);
  return (
      <div>{userDetailsList}</div>
  );
};