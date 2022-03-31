import { JwtPayload, } from 'jsonwebtoken';

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
export interface IDataJWT extends JwtPayload {
    id?: string;
    type?: string;
}

/**
 * Function type signature used in validation option for strategies.
 */
export type ValidateSignature = (r: Request, token: string) => Promise<any>;
