import React, { Fragment } from "react";
import { BackgroundNote } from "../../components/Main/background_blur/style";
import Notebook from "../../components/Main/notebook";

export default () => {
  return (
    <Fragment>
      <BackgroundNote />
      <Notebook />
    </Fragment>
  );
};
