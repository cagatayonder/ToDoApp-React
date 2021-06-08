
import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item" key={todo.id}>
              <TodoItem {...todo} clickedItem={props.clickedItem}
                deletedItem={props.deletedItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;