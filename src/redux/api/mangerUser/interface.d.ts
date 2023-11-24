interface IUser {
  user_id: string;
  full_name: string;
  account_status: string;
  status?: string;
  date: string;
  first_name: string;
  last_name: string;
  wallet_balance: number;
  email: string;
  dob: string;
  gender: string;
  kyc_status: boolean;
  phone_number: string;
  txn: ITxnData;
}

interface ITxnData {
  data: ITransaction[];
  pagination: {
    hasNextPage: boolean;
    totalPages: number;
    hasPreviousPage: boolean;
    totalCount: number;
    totalPages: number;
  };
}

interface ITransaction {
  amount: number;
  id: string;
  purpose: string;
  reference: string;
  created_at: string;
  entity: {
    first_name: string;
    last_name: string;
  };
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
