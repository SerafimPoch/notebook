import React from "react";
import { Helmet } from "react-helmet";
import { HeaderContainer } from "./style";

export default () => {
  return (
    <HeaderContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Notebook page</title>
      </Helmet>
      <p>Без заплутаних дротів.</p>
      <p>Без заплутаних ходів.</p>
    </HeaderContainer>
  );
};
