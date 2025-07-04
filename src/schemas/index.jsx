import * as Yup from "yup";

export const SignUpSchcema = Yup.object({
  name: Yup.string().min(2).max(25).required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).required("Email is required"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
