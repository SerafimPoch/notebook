import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  width: 40%;
  margin-bottom: 46px;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 144px;
  height: 40px;
  color: #498ac9;
  font-size: 14px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #498ac9;
  background-color: transparent;

  &:focus {
    background-color: rgba(73, 138, 201, 0.4);
    color: white;
  }
`;
