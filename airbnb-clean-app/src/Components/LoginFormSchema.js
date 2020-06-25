import * as yup from 'yup';

const loginFormSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "username must be longer than 3 characters")
      .required("Username is a required field"),
    password: yup
      .string()
      .min(3, "password must be longer than 3 characters")
      .required("Password is a required field"),
  });

  export default loginFormSchema;