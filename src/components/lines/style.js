import styled from "styled-components";

export const LinesContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -150px;
  left: -60px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
    left: 5px;
  }
`;
