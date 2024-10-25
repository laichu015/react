import styled from "styled-components";

export const TodosWrap = styled.div`
  margin-left: 350px;
  .container {
    width: 500px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    h1 {
      font-size: 18px;
      text-align: center;
      font-weight: 600;
    }
    .contents {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      button {
        width: 70px;
        height: 40px;
        background: #000;
        color: #fff;
        border-radius: 0px;
        margin-right: 15px;
      }
    }
  }
`;
