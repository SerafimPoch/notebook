import React from "react";
import { Link } from "react-router-dom";
import { ButtonsContainer, Button } from "./style";

export default () => {
  return (
    <ButtonsContainer>
      <Link style={{ textDecoration: "none" }} to="/notebook">
        <Button>Позаду</Button>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/left">
        <Button>Ліва сторона</Button>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/right">
        <Button>Права сторона </Button>
      </Link>
    </ButtonsContainer>
  );
};
