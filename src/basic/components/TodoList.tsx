import React from "react";
import {Todo} from "../../shared/user/UserService";
import {TodoDetails} from "./TodoDetails";

export type TodoListProps = {
 todos?: Todo[];
}

export function TodoList({todos = []}: TodoListProps) {

  const todoItems = todos.map(todo => <TodoDetails {... todo} key={todo.id} />);

  if (todoItems.length === 0) {
    return <div>No TODOs found</div>
  }

  return <div>{todoItems}</div>;
}