import * as yup from 'yup';

export const faqFormSchema = yup.object().shape({
  question: yup.string().required(),
  answer: yup.string().required(),
});
