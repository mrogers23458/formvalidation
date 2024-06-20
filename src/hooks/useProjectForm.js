import { useReducer } from "react";
import { validateForm } from "../helpers";
import projectValidationSchema from "../schemas/projectValidationSchema";

const initialState = {
  projectName: "",
  association: "",
  errors: {},
};

const projectReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_PROJECT_NAME":
      return { ...state, projectName: action.payload };
    case "CHANGE_PROJECT_ASSOCIATION":
      return { ...state, association: action.payload };
    case "FORM_ERRORS":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

const handleSubmit = async (event, payload, dispatch) => {
  event.preventDefault();
  const validationErrors = validateForm(payload, projectValidationSchema);
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

const useProjectFormReducer = () => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  return { state, dispatch, handleSubmit };
};

export default useProjectFormReducer;
