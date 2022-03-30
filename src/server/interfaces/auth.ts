/**
 * Tokens interface used in JWT generation response.
 */
export interface ITokens {
    access: string;
    refresh: strin;
}

/**
 * JWT data interface used in JWT generation params.
 */
export interface IDataJWT {
    id?: string;
    type?: string;
}
