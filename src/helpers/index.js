export const validateForm = (form, schema) => {
  const errors = {};

  Object.keys(schema).forEach((fieldName) => {
    const fieldRules = schema[fieldName];

    // Check required fields
    if (fieldRules.required && !form[fieldName].trim()) {
      errors[fieldName] = `${
        fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
      } is required.`;
    }

    console.log({ fieldRules });
    // Check regex validation if specified
    if (fieldRules.regex && !fieldRules.regex.test(form[fieldName].trim())) {
      errors[fieldName] = fieldRules.message;
    }

    // Check minLength validation if specified
    if (
      fieldRules.minLength &&
      form[fieldName].trim().length < fieldRules.minLength
    ) {
      errors[fieldName] = fieldRules.message;
    }

    if (fieldRules.customValidation) {
      const result = fieldRules.customValidation(form[fieldName]);
      errors[fieldName] = result;
    }
  });

  return errors;
};
