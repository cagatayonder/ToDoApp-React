  
import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, clickedItem, checked, deletedItem } = props;

  let item = "";

  checked && (item = "checked");

  return <div className="d-flex justify-content-between align-items-center" onClick={() => clickedItem(id)}>
    <span className={item}> {content} </span>
    <button className="btn btn-danger"
      onClick={(e) => {e.stopPropagation(); deletedItem(id); }}>
      Sil
    </button>
  </div>;
}

export default Todo;