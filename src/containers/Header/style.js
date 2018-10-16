import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  font-size: 55px;
  font-height: 52px;
  align-items: center;
  font-style: Regular;
  flex-flow: column wrap;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 25px;
    font-height: 23px;
  }
`;
