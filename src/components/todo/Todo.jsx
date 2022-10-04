import React from "react";
import "./style.css";

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  return (
    <div className="todo_container">
      <div>
        <h2 className="todo_title">{todo.title}</h2>
        <div className="todo_desc">{todo.desc}</div>
      </div>
      <div className="button_set">
        <button
          className="delete_button"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="complete_button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
