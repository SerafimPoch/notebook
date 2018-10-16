import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: -120px;
  }
`;
