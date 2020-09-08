import * as Yup from "yup";

export const USER_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().max(16).required(),
  email: Yup.string().max(255).required().email(),
  gender: Yup.mixed().required().oneOf(['Female', 'Male'])
});
