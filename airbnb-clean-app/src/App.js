import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Form from "./Components/RegistrationForm";
import ListingsForm from "./Components/ListingsForm";
import FormContainer from "./Components/FormContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/login">
        <FormContainer>
          <Login />
        </FormContainer>
      </Route>
      <Route path="/register">
        <FormContainer>
          <Form />
        </FormContainer>
      </Route>
      <Route path="/listings">
        <FormContainer>
          <ListingsForm />
        </FormContainer>
      </Route>
    </div>
  );
}
export default App;
