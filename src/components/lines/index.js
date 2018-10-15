import React from "react";
import { LinesContainer } from "./style";
import FirstLine from "./first_line";
import SecondLine from "./second_line";
import ThirLine from "./third_line";
import FourthLine from "./fourth_line";
import FifthLine from "./fifth_line";

export default () => {
  return (
    <LinesContainer>
      <FirstLine />
      <SecondLine />
      <ThirLine />
      <FourthLine />
      <FifthLine />
    </LinesContainer>
  );
};
