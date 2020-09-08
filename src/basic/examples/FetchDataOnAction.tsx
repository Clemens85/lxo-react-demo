import {ExampleInfo} from "../../shared/ExampleInfo";
import React, {useState} from "react";
import {UserDetails} from "../components/UserDetails";
import {UsersContainer} from "../components/UsersContainer";
import {findEntityById} from "../../shared/Utils";
import cloneDeep from "lodash/cloneDeep";
import {TodoList} from "../components/TodoList";
import {AsyncButton} from "../../shared/AsyncButton";
import {findTodosOfUserAsync, User, UserWithTodos} from "../../shared/user/UserService";

export default function FetchDataOnAction() {
  return (
      <>
        <ExampleInfo nr={3}>
          <span>This example builds upon the basic fetching data example above and shows furthermore how to load data on user actions</span><br />
          <span>It additionally shows the usage of date-fns for Date/Time rendering.</span>
        </ExampleInfo>
        <div style={{marginTop: 15}}>
          <UsersContainer render={users => <UserListWithTodos users={users}/>} limit={10} />
        </div>
      </>
  );
}

const UserListWithTodos = ({users}: {users: User[]}) => {

  const [usersWithTodos, setUsersWithTodos] = useState(_mapUsersToUsersWithEmptyTodos(users)); // Init with no TODOs

  const handleFetchTodos = async(userId: number) => {
    const todos = await findTodosOfUserAsync(userId);

    const usersWithTodosCopy = cloneDeep(usersWithTodos);
    const userWithTodosToUpdate = findEntityById(usersWithTodosCopy, userId);
    userWithTodosToUpdate.todos = todos;

    setUsersWithTodos(usersWithTodosCopy);
  };

  function _mapUsersToUsersWithEmptyTodos(users: User[]): UserWithTodos[] {
    return users.map((user) => {
      return { id: user.id, user: user }; // TODOs is left empty
    });
  }

  const userRows = usersWithTodos
                      .map(userWithTodo => <UserTableRow userWithTodo={userWithTodo} onFetchTodos={handleFetchTodos} key={userWithTodo.id} />);

  return (
    <table>
      <thead>
        <tr>
          <th>User-Info</th>
          <td>TODOs</td>
        </tr>
      </thead>
      <tbody>
        {userRows}
      </tbody>
    </table>
  );
};

interface UserTableRowProps {
  userWithTodo: UserWithTodos,
  onFetchTodos: (userId: number) => void;
}
function UserTableRow({userWithTodo, onFetchTodos}: UserTableRowProps) {

  const { user, id: userId, todos } = userWithTodo;

  const hasTodos = todos && todos.length >= 0;

  return (
      <tr style={{ verticalAlign: "top", borderBottom: "1px solid" }}>
        <td>
          <UserDetails user={user}/>
        </td>
        <td style={{ textAlign: "left"}}>
          { hasTodos
              ? <TodoList todos={todos}/>
              : <AsyncButton onClick={() => onFetchTodos(userId)}>Fetch TODOs</AsyncButton>
          }
        </td>
      </tr>
  );
}