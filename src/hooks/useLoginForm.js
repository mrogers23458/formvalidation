import { useReducer } from "react";
import { validateForm } from "../helpers";
import loginValidationSchema from "../schemas/loginFormSchema";

const initialState = {
  email: "",
  password: "",
  errors: {},
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    case "CHANGE_PASSWORD":
      return { ...state, password: action.payload };
    case "FORM_ERRORS":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

const handleSubmit = async (event, payload, dispatch) => {
  event.preventDefault();
  const validationErrors = validateForm(payload, loginValidationSchema);
  if (Object.keys(validationErrors).length > 0) {
    return dispatch({
      type: "FORM_ERRORS",
      payload: validationErrors,
    });
  }

  // Simulate API call
  return setTimeout(() => {
    console.log("success");
  }, 1000);
};

const useLoginFormReducer = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  return { state, dispatch, handleSubmit };
};

export default useLoginFormReducer;
