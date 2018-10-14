import React, { Fragment } from "react";
import { BackgroundNote } from "../../components/Main/background_blur/style";
import Notebook from "../../components/Main/notebook";
import FirstLine from "../../components/first_line";

export default () => {
  return (
    <Fragment>
      <BackgroundNote />
      <Notebook />
      <FirstLine />
    </Fragment>
  );
};
