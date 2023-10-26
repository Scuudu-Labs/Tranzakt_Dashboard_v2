interface ISuccessResponse<T=void> {
    success: boolean;
    message: string;
    data: T | null
}

interface IErrorResponse {
    success: boolean;
    error: string;
    errors: string[];
    
}