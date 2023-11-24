interface IUser {
  user_id: string;
  full_name: string;
  account_status: string;
  date: string;
  first_name: string;
  last_name: string;
  wallet_balance: number;
  email: string;
  dob: string;
  gender: string;
  kyc_status: boolean;
  phone_number: string;
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
