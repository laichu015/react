import { useState } from "react";
import TodoForm from "../../components/todos/TodoForm";
import TodoList from "../../components/todos/TodoList";
import { TodosWrap } from "./style";

const Todo = () => {
  const [data, setData] = useState([
    { id: 1, text: "프로젝트 일정관리", isChk: false },
    { id: 2, text: "프로젝트 설계", isChk: false },
    { id: 3, text: "프로젝트 만들기", isChk: false },
    { id: 4, text: "리엑트 공부하기", isChk: false },
    { id: 5, text: "리덕스 공부하기", isChk: false },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredData = () => {
    switch (filter) {
      case "completed":
        return data.filter((item) => item.isChk);
      case "ongoing":
        return data.filter((item) => !item.isChk);
      default:
        return data;
    }
  };

  const visibleData = filteredData();

  return (
    <TodosWrap>
      <div className="container">
        <h1>할일을 입력하세요</h1>
        <TodoForm data={data} setData={setData} />
        <TodoList data={visibleData} setData={setData} />
        <p className="contents">
          <button onClick={() => setFilter("all")}>전체</button>
          <button onClick={() => setFilter("completed")}>완료</button>
          <button onClick={() => setFilter("ongoing")}>진행중</button>
          <span>총개수 : {visibleData.length}</span>
        </p>
      </div>
    </TodosWrap>
  );
};

export default Todo;
