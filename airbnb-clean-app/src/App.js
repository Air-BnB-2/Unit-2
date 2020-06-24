import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import LoginFormContainer from "./Components/LoginFormContainer";

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

function App() {
  return (
    <>
      <WrapperDiv>
        <Header />
  
      </WrapperDiv>

      <Switch>
        <Route to='/'>
          <LoginFormContainer>
            <Login />
          </LoginFormContainer>
        </Route>
      </Switch>
    </>
);
}

export default App;