interface IUser {
  user_id: string;
  full_name: string;
  status: string;
  date: string;
}

interface IUserQuery extends Partial<IQuerySearch> {
  page: number;
  limit: number;
}
