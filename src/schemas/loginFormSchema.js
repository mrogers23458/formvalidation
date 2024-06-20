const loginValidationSchema = {
  type: "LOGIN_FORM",
  email: {
    required: true,
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address.",
  },
  password: {
    required: true,
    minLength: 8,
    regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    message:
      "Password must be at least 8 characters long and include 1 uppercase letter, 1 special character, and 1 number.",
  },
};

export default loginValidationSchema;
