import React from "react";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "./style";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Main} />
        <Footer />
      </Container>
    </Router>
  );
};
