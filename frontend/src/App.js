import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>        
          <Route to="/" component={HomeScreen} exact />
          <Route to="/product/:id" component={ProductScreen} />        
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
