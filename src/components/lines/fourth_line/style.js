import styled from "styled-components";

export const EtherContainer = styled.div`
  display: flex;
  font-size: 11px;
  align-items: center;
  flex-flow: column wrap;
  position: relative;
  left: 24px;
  top: 10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    left: -12px;
    top: 0px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 7px;
    top: 2px;
    left: 17px;
  }
`;

export const Ether = styled.div`
  width: 1px;
  height: 130px;
  background-color: #fff;
  transform-origin: top;
  animation: animate_fourth 1.5s;

  @keyframes animate_fourth {
    0% {
      height: 0px;
    }

    100% {
      height: 130px;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 108px;

    @keyframes animate_fourth {
      0% {
        height: 0px;
      }

      100% {
        height: 108px;
      }
    }
  }
`;
