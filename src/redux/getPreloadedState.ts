export const getPreloadedState = () => {
    const defaultValue = {
        auth: {
            user: (localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo') as string) : null) as IAdmin | null,
            access_token: (localStorage.getItem('adminToken') ? JSON.parse(localStorage.getItem('adminToken') as string) : null) as string | null
        }
    }
    return defaultValue;
}