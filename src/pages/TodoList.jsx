import React from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import { useState } from "react";

const TodoList = () => {
  //투두리스트의 내용틀이다. id는 생성될때마다 점차 늘어나게 해서 각 키값으로 구분할수있게 한다.
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할일 제목11",
      desc: "할일 내용11",
      isDone: false,
    },
    {
      id: 2,
      title: "할일 제목2",
      desc: "할일 내용2",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
