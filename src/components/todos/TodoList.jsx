import { TodoListWrap } from "./style";
import TodoItem from "./TodoItem";

const TodoList = ({ data, setData }) => {
  return (
    <TodoListWrap>
      {data.map((item) => (
        <TodoItem key={item.id} {...item} setData={setData} data={data} />
      ))}
    </TodoListWrap>
  );
};

export default TodoList;
