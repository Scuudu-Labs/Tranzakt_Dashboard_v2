import * as yup from 'yup';

export const faqFormSchema = yup.object().shape({
  question: yup.string().required(),
  answer: yup.string().required(),
});

export const campaignFormSchema = yup.object().shape({
  title: yup.string().required(),
  cta_title: yup.string().required(),
  ends_at: yup.string().required(),
  starts_at: yup.string().required(),
  cta_url: yup.string().required(),
});
