import styled from "styled-components";

export const HDMIContainer = styled.div`
  display: flex;
  font-size: 11px;
  flex-flow: column wrap;
  align-items: center;
  position: relative;
  left: 30px;
`;

export const HDMI = styled.div`
  width: 1px;
  height: 130px;
  background-color: #fff;
  transform-origin: top;
  animation: animate_second 1.5s;

  @keyframes animate_second {
    0% {
      height: 0px;
    }

    100% {
      height: 130px;
    }
  }
`;
