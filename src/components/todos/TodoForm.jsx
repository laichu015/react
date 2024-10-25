import { useState } from "react";
import { TodoFormWrap } from "./style";

const TodoForm = ({ data, setData }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
  };

  const onAdd = (text) => {
    const newId = data.length
      ? Math.max(...data.map((item) => item.id)) + 1
      : 1;
    setData([...data, { id: newId, text, isChk: false }]);
    setText("");
  };

  return (
    <TodoFormWrap onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">+</button>
    </TodoFormWrap>
  );
};

export default TodoForm;
