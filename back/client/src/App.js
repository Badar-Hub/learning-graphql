import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <NavBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
