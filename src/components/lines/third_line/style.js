import styled from "styled-components";

export const USBContainer = styled.div`
  display: flex;
  font-size: 11px;
  flex-flow: column wrap;
  align-items: center;
  position: relative;
  left: 35px;
  top: 3px;

  @media (min-width: 768px) and (max-width: 1024px) {
    left: 16px;
    top: 8px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    left: 18px;
    font-size: 7px;
  }
`;

export const USB = styled.div`
  width: 1px;
  height: 80px;
  background-color: #fff;
  transform-origin: top;
  animation: animate_third 1.5s;

  @keyframes animate_third {
    0% {
      height: 0px;
    }

    100% {
      height: 80px;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 127px;

    @keyframes animate_third {
      0% {
        height: 0px;
      }

      100% {
        height: 127px;
      }
    }
  }
`;
