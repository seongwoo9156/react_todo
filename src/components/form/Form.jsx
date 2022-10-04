import React from "react";
import { useState } from "react";

import "./style.css";
// 아이디에 들어갈 넘버값, 추가할떄마다 1씩 증가된다.
let number = 3;

const Form = ({ setTodos, todos }) => {
  //값을 비워둔 초기값
  const form = {
    id: 0,
    title: "",
    desc: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(form);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.desc.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(form);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="FormBox">
      <div className="inputBox">
        <label className="Form_label">제목</label>
        <input
          type="text"
          name="title"
          className="input"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label className="Form_label">내용</label>
        <input
          type="text"
          name="desc"
          className="input"
          value={todo.desc}
          onChange={onChangeHandler}
        />
      </div>
      <button className="formbtn">추가</button>
    </form>
  );
};

export default Form;
