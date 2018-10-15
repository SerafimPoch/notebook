import styled from "styled-components";

export const USBContainer = styled.div`
  display: flex;
  font-size: 11px;
  flex-flow: column wrap;
  align-items: center;
  position: relative;
  left: 35px;
  top: 3px;
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
`;
