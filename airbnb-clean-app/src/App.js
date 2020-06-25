import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import Login from "./Components/Login";
import LoginFormContainer from "./Components/LoginFormContainer";
import Form from "./Components/RegistrationForm";
import ListingsForm from "./Components/ListingsForm";

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

function App() {
  return (
    <>
      <WrapperDiv>
        <Header />

        <Route path="/login">
          <LoginFormContainer>
            <Login />
          </LoginFormContainer>
        </Route>
        <Route path="/register">
          <Form />
        </Route>
        <Route path="/listings">
          <ListingsForm />
        </Route>
      </WrapperDiv>
    </>
  );
}

export default App;
