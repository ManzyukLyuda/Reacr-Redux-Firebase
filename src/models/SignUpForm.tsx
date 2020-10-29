export type FormData = {
    email: string;
    password: string;
};

export type errorData = {
    code: 'auth/wrong-password' | 'auth/user-not-found' | null,
    message: string
}