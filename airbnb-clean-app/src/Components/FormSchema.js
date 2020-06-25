import * as Yup from "yup";

const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is a required field")
    .min(2, "First Name must include at least 2 characters"),
  lastName: Yup.string()
    .required("Last Name is a required field")
    .min(2, "Last Name must include at least 2 characters"),
  username: Yup.string().required("Username is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Must enter a valid email address"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

export default formSchema;
