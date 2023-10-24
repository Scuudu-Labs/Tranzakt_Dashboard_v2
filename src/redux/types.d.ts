interface ISuccessResponse<T> {
    success: boolean;
    data: T
}

interface IErrorResponse {
    success: boolean;
    error: string;
    errors: string[];s
    
}