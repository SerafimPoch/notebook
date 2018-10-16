import React from "react";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "./style";
import { LeftSide, RightSide } from "../Sides";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/left" component={LeftSide} />
        <Route exact path="/right" component={RightSide} />
        <Footer />
      </Container>
    </Router>
  );
};
