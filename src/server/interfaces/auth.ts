/**
 * Tokens interface used in JWT generation response.
 */
export interface ITokens {
    access: string;
    refresh: string;
}

/**
 * JWT payload interface used when signing with JWT.
 */
export interface IDataJWT {
    id?: string;
    type?: string;
}
