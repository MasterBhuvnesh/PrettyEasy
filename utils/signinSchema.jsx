import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must not exceed 20 characters")
    .matches(/[a-zA-Z]/, "Password can only contain letters"),
});

export default validationSchema;
