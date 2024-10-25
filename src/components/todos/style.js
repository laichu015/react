import styled from "styled-components";

export const TodoFormWrap = styled.form`
  input {
    width: 400px;
    height: 40px;
  }
  button {
    width: 70px;
    height: 50px;
    margin-left: 10px;
    background: #000;
    color: #fff;
    border-radius: 0px;
    transform: translateY(5%);
  }
`;

export const TodoListWrap = styled.ul`
  li {
    padding: 5px 10px;
    border-bottom: 1px solid #dcdcdc;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 470px;
    &.on {
      color: red;
      border: 1px solid red;
      text-decoration: line-through red;
    }

    input {
      height: 30px;
      margin-right: 25px;
    }
    input[type="text"] {
      width: 250px;
      height: 30px;
    }
    .btn {
      display: flex;
      align-items: center;
      margin-left: auto;
      button {
        border: none;
        background: none;
        cursor: pointer;
        width: auto;
      }
    }
  }
`;
