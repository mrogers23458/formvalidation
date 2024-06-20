const projectValidationSchema = {
  type: "ADD_PROJECT_FORM",
  projectName: {
    required: true,
    minLength: 5,
    message: "Project name must be at least 5 characters long.",
  },
  association: {
    required: true,
    minLength: 8,
    customValidation: (val) => {
      if (!val.startsWith("Resource")) {
        return "Please select a valid Resource.";
      }
    },
    message: "Association is required.",
  },
};

export default projectValidationSchema;
