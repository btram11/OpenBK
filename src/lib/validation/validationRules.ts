import * as yup from "yup";

export const nameValidation = {
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
};

export const emailValidation = {
  email: yup.string().email("Invalid email").required("Email is required"),
};

export const passwordValidation = {
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
};

export const confirmPasswordValidation = (referenceField: string) =>
  yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref(referenceField)], "Confirm Password must match");
