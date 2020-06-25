import * as yup from 'yup';

const loginFormSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, "Username must include at least 2 characters")
      .required("Username is a required field"),
    password: yup
      .string()
      .min(2, "Password must include at least 2 characters")
      .required("Password is a required field"),
  });

  export default loginFormSchema;