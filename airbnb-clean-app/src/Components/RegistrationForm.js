import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import formSchema from "./FormSchema";
import * as yup from "yup";
import axios from "axios";

export default function Form() {

  const initialFormValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

  const history = useHistory()
  const [formState, setFormState] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormValues);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {

    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });

  }, [formState]);

  const validateChange = (event) => {

    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors,
        });
      });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://reqres.in/api/register", formState)
      .then((response) => {
        setUsers([...users, response.data]);
        console.log("success", response.data);
        setFormState(initialFormValues);
      })
      .catch((err) => {
        console.log(err.response);
      });

    history.push('/dashboard')
  };

  const inputChange = (event) => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "button"
          ? event.target.submit
          : event.target.value,
    };
    validateChange(event);
    setFormState(newFormData);
  };

  return (
    <Container>
      <form onSubmit={formSubmit}>
        <h1>Register</h1>
        <label htmlFor="firstName">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formState.firstName}
            onChange={inputChange}
          />
          <p className="errors">{errors.firstName}</p>
        </label>
        <label htmlFor="lastName">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formState.lastName}
            onChange={inputChange}
          />
          <p className="errors">{errors.lastName}</p>
        </label>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={inputChange}
          />
          <p className="errors">{errors.username}</p>
        </label>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={inputChange}
          />
          <p className="errors">{errors.email}</p>
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={inputChange}
          />
          <p className="errors">{errors.password}</p>
        </label>
        <Button disabled={buttonDisabled} name="submit">
          Register
              </Button>
        <p>
          Already have an account?
            <br />
          <Link to='/login' className='link'>
            Log in here
            </Link>
        </p>
      </form>
    </Container>
  );
}
