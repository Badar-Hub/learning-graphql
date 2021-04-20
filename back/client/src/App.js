import { BrowserRouter as Router, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Container>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Container>
    </Router>
  );
};

export default App;
