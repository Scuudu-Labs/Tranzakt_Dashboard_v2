interface ISuccessResponse<T = void> {
  success: boolean;
  message: string;
  data: T | null;
}

interface IErrorResponse {
  success: boolean;
  status: number;
  error: string;
  errors: string[];
}
