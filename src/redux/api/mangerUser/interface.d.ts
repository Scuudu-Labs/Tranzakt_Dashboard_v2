/* eslint-disable @typescript-eslint/no-unused-vars */
interface IUser {
  user_id: string;
  full_name: string;
  status: string;
  date: string;
}

interface IUserDetails {
  users: IUser[];
  meta: { count: number };
}

interface IUserQuery extends Partial<IQuerySearch> {
  page: number;
  limit: number;
}

interface IQueryString {
  [key: string]: string | number | boolean;
}
