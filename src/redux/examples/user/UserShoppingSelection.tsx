import React from "react";
import {UsersContainer} from "../../../basic/components/UsersContainer";
import {User} from "../../../shared/user/UserService";
import {UserDetails} from "../../../basic/components/UserDetails";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../RootReducer";
import { selectUser } from './Actions';

export default function UserShoppingSelection() {
  return (
      <div style={{paddingRight: '15px'}}>
        <h2>User Selection</h2>
        <p><em>(Cart will be cleared for new user selection)</em></p>
        <UsersContainer render={users => <SelectableUserList users={users} />} limit={3} />
      </div>
    );
}

const SelectableUserList = ({users}: {users: User[]}) => {

  const selectedUser = useSelector((state: RootState) => state.users.selectedUser);

  const dispatch = useDispatch();

  const handleUserClick = (user: User) => {
    dispatch(selectUser(user));
  };

  const userNodes = users.map(user => <SelectableUser key={user.id}
                                                      user={user}
                                                      onUserClick={() => handleUserClick(user)}
                                                      selected={selectedUser?.id === user.id} />);
  return (
      <div>{userNodes}</div>
  );
};

interface SelectableUserProps {
  user: User;
  selected: boolean,
  onUserClick: (...args: any[]) => unknown;
}

const SelectableUser = ({user, selected, onUserClick}: SelectableUserProps) => {
  return (
      <div>
        <UserDetails key={user.id} user={user} />
        <button onClick={onUserClick} disabled={selected} style={{ padding: '5px', marginTop: '5px'}}>Select for Shopping</button>
      </div>
  );
};