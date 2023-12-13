import * as yup from 'yup';

const pattern =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
export const faqFormSchema = yup.object().shape({
  question: yup.string().required(),
  answer: yup.string().required(),
});

export const campaignFormSchema = yup.object().shape({
  title: yup.string().required(),
  cta_title: yup.string().required(),
  starts_at: yup
    .date()
    .default(() => new Date())
    .required(),
  ends_at: yup
    .date()
    .when(
      'starts_at',
      (starts_at, schema) => starts_at && schema.min(starts_at)
    )
    .required(),
  cta_url: yup.string().matches(pattern, 'Enter a valid url').required(),
});
