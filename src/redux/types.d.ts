interface ISuccessResponse<T> {
    success: boolean;
    message: string;
    data: T
}

interface IErrorResponse {
    success: boolean;
    error: string;
    errors: string[];
    
}