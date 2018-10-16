import styled from "styled-components";

export const MiniDisplayContainer = styled.div`
  display: flex;
  font-size: 11px;
  flex-flow: column wrap;
  align-items: flex-end;

  @media (min-width: 320px) and (max-width: 768px) {
    position: relative;
    left: 4px;
    font-size: 7px;
  }
`;

export const MiniDisplay = styled.div`
  width: 1px;
  height: 130px;
  background-color: #fff;
  transform-origin: top;
  animation: animate 1.5s;

  @keyframes animate {
    0% {
      height: 0px;
    }

    100% {
      height: 130px;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 38px;

    @keyframes animate {
      0% {
        height: 0px;
      }

      100% {
        height: 38px;
      }
    }
  }
`;
