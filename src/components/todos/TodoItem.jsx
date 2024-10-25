import { useState } from "react";
import { FaTrashRestore, FaPen } from "react-icons/fa";

const TodoItem = ({ id, text, isChk, setData, data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const onDel = (id) => {
    setData(data.filter((i) => i.id !== id));
  };

  const onToggle = (id) => {
    setData(data.map((x) => (x.id === id ? { ...x, isChk: !x.isChk } : x)));
  };

  const onEdit = () => {
    if (isEditing) {
      setData(data.map((x) => (x.id === id ? { ...x, text: newText } : x)));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={isChk ? "on" : ""}>
      <input type="checkbox" checked={isChk} onChange={() => onToggle(id)} />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        text
      )}
      <p className="btn">
        <button onClick={onEdit}>
          <FaPen />
        </button>
        <button onClick={() => onDel(id)}>
          <FaTrashRestore />
        </button>
      </p>
    </li>
  );
};

export default TodoItem;
