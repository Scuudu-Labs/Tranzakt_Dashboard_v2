export const formatText = (text: string): string => {
  return text.replace('_', ' ');
};

export const currencyFormatter = (currency: number) => {
  return Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  })
    .format(currency)
    .replace(/(\.|,)00$/g, '');
};
