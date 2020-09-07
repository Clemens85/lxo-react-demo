import React from "react";
import {Todo} from "../../shared/UserService";
import {LocalDate} from "../../shared/date/LocalDate";
import {Time} from "../../shared/date/Time";

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

function TodoDetails({title, completed, created_at: createdAt}: Todo)  {
  return (
      <div style={{marginBottom: '15px'}}>
        <div>
          <strong>{title}</strong> <CompletedLabel completed={completed}/>
        </div>
        <div>Created at: <LocalDate date={createdAt}/> <Time date={createdAt} /></div>
      </div>
  );
}

type CompletedProps = {
  completed: boolean;
}
function CompletedLabel({completed}: CompletedProps) {
  if (completed) {
    return <span style={{ color: 'green'}}>Completed</span>
  } else {
    return <span style={{ color: 'red'}}>Open</span>
  }
}