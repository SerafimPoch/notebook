import styled from "styled-components";

export const MiniDisplayContainer = styled.div`
  display: flex;
  position: relative;
  flex-flow: column wrap;
  align-items: flex-end;
  top: -149px;
  left: -224px;
`;

export const MiniDisplay = styled.div`
  width: 1px;
  height: 130px;
  background-color: #fff;
  transform-origin: top;
  animation: animate forwards 1.5s;

  @keyframes animate {
    0% {
      height: 0px;
    }

    100% {
      height: 130px;
    }
  }
`;
