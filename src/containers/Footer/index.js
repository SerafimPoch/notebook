import React from "react";
import { FooterContainer } from "./style";
import Buttons from "../../components/Footer/buttons";
import FooterTitle from "../../components/Footer/title";

export default () => {
  return (
    <FooterContainer>
      <Buttons />
      <FooterTitle />
    </FooterContainer>
  );
};
