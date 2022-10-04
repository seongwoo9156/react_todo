import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
//딜리트함수버튼 todos를 setTodos로 변환todos배열에서 todo.id 가 파라미터로 일치하지 않는 원소만 추출해서
//새로운 배열을 만듬=todo.id 가 id 인 것을 제거
function List({ todos, setTodos }) {
  //삭제버튼 함수
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };
  //완료, 취소 버튼 함수
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list_container">
      <h2 className="list_title blue">할일리스트 </h2>
      <div className="list_wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list_title red">완료! </h2>
      <div className="list_wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
