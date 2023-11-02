interface IAdmin extends ILoginResponse {
  auth_token: string;
  completed_business_kyc: boolean;
  completed_kyc: boolean;
  created_at: string;
  full_name: string;
}

interface AdminSlice {
  user: IAdmin | null;
  access_token: string | null;
}

interface IQuerySearch {
  status: string | null;
  sort_by: string | null;
}

interface ISearch {
  search: IQuerySearch;
}
