import * as yup from 'yup';

export const updatePasswordSchema = yup
  .object({
    password: yup.string().min(6).max(20).required(),
    newPassword: yup.string().min(6).max(20).required(),
  })
  .required();
