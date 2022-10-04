import React from "react";
import "./style.css";

//리스트에서 프롭스로 투두 내용안에 들어갈 내용과 삭제, 변경 버튼의 함수를 받아온다.

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
