import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Container from './Container';
import Wrapper from './FormWrapper';
import Button from './Button';
import loginFormSchema from './LoginFormSchema';
import * as yup from "yup";
import axios from "axios";

function Login() {

  const initialFormValues = {
    username: "",
    password: ""
  };

  const [users, setUsers] = useState([]);
  const [formState, setFormState] = useState(initialFormValues);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormValues);
 
  useEffect(() => {

    loginFormSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = (event) => {
    yup
      .reach(loginFormSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [event.target.name]: ""
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [event.target.name]: error.formErrors
        });
      });
  };

  const formSubmit = (event) => {

    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setUsers([...users, response.data]);
        console.log(response.data);

        setFormState(initialFormValues);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onInputChange = (event) => {
    event.persist();

    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "button" ? event.target.submit : event.target.value,
    };
    validateChange(event);
    setFormState(newFormData);
  };

  return (
    <Container>
      <form onSubmit={formSubmit}>
        <Wrapper>
        <div className="formHeading">
          <h1>Login</h1>
        </div>
        <div className="formInputs">
          <label htmlFor="username">
            <input
              id="username"
              value={formState.username}
              type="text"
              name="username"
              placeholder="Username"
              onChange={onInputChange}
            />
            <p className="errors">{formErrors.username}</p>
          </label>
        </div>
        <div className="formInputs">
          <label htmlFor="password">
            <input
              id="password"
              value={formState.password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={onInputChange}
            />
            <p className="errors">{formErrors.password}</p>
          </label>
        </div>
        <div className="submitButton">
          <Button disabled={buttonDisabled} type="button" name='submit'>Login</Button>
        </div>
        <p>
            Don't have an account?
            <br />
            <Link to='/register' className='link'>
              Register here
            </Link>
        </p>
        </Wrapper>
      </form>
    </Container>
  );
}

export default Login;
