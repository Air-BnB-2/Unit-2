import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import Container from './Container';
import Button from './Button';
import loginFormSchema from './LoginFormSchema';
import * as yup from "yup";
import axios from "axios";

function Login() {

  const initialFormValues = {
    username: "",
    password: ""
  };

  const history = useHistory()
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

    history.push('/dashboard')
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
        <h1>Login</h1>
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
        <Button disabled={buttonDisabled} name='submit'>Login</Button>
        <p>
          Don't have an account?
            <br />
          <Link to='/register' className='link'>
            Register here
          </Link>
        </p>
      </form>
    </Container>
  );
}

export default Login;
