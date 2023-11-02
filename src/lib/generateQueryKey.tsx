export const generateQueryString = (parameters: {
  [key: string]: string | number | boolean;
}) => {
  const queryStringArray = [];
  for (const key in parameters) {
    if (parameters[key] !== '') {
      queryStringArray.push(`${key}=${encodeURIComponent(parameters[key])}`);
    }
  }

  return `${queryStringArray.join('&')}`;
};
