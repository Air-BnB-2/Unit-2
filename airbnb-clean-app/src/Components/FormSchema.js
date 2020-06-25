import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup.string()
    .required("First Name is a required field")
    .min(2, "First Name must include at least 2 characters"),
  lastName: yup.string()
    .required("Last Name is a required field")
    .min(2, "Last Name must include at least 2 characters"),
  username: yup.string().required("Username is a required field"),
  email: yup.string()
    .required("Email is a required field")
    .email("Must enter a valid email address"),
  password: yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

export default formSchema;
