export const getPreloadedState = () => {
  const adminInfo = localStorage.getItem('adminInfo');
  const adminToken = localStorage.getItem('adminToken');
  const defaultValue = {
    auth: {
      user: (adminInfo
        ? JSON.parse(adminInfo as string)
        : null) as IAdmin | null,
      access_token: (adminToken ? JSON.parse(adminToken as string) : null) as
        | string
        | null,
    },
  };
  return defaultValue;
};
