// The token saves a specific user by its values
export interface Token {
    access_token: string;
    token_type: string;
    userName: string;
    expires_in: number;
    issued: Date;
    expires: Date;
}