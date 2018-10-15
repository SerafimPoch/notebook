import styled from "styled-components";

export const EtherContainer = styled.div`
  display: flex;
  font-size: 11px;
  flex-flow: column wrap;
  position: relative;
  left: 24px;
  top: 10px;
  align-items: center;
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
`;
