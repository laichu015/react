import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./components/styled/reset";
import Todo from "./pages/todos";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Todo />
      </BrowserRouter>
    </>
  );
};

export default App;
