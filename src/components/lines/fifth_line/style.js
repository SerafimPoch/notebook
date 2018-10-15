import styled from "styled-components";

export const ACContainer = styled.div`
  display: flex;
  font-size: 11px;
  flex-flow: column wrap;
  align-items: center;
  position: relative;
  left: 75px;
`;

export const AC = styled.div`
  width: 1px;
  height: 130px;
  background-color: #fff;
  transform-origin: top;
  animation: animate_fifth 1.5s;

  @keyframes animate_fifth {
    0% {
      height: 0px;
    }

    100% {
      height: 130px;
    }
  }
`;
