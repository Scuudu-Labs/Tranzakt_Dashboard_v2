interface ILogin {
    email: string;
    password: string;
}

interface ILoginResponse {
    email: string;
    role: string;
    status: string;
    has_verified_phone: boolean;
    has_verified_email: boolean;
    id: string;
    auth_token: string;
    created_at: string;
    updated_at: string;
}