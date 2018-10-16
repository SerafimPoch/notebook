import styled from "styled-components";

export const HDMIContainer = styled.div`
  display: flex;
  font-size: 11px;
  flex-flow: column wrap;
  align-items: center;
  position: relative;
  left: 30px;

  @media (min-width: 768px) and (max-width: 1024px) {
    left: 8px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    left: 7px;
    font-size: 7px;
  }
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

  @media (min-width: 320px) and (max-width: 768px) {
    height: 86px;

    @keyframes animate_second {
      0% {
        height: 0px;
      }

      100% {
        height: 86px;
      }
    }
  }
`;
