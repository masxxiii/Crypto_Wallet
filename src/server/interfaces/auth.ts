import { JwtPayload, } from 'jsonwebtoken';
import { Account, } from '../models/Account';

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
 * Validate token interface used as a return type in.
 */
interface IValidateToken {
    isValid: boolean;

    credentials: {
        account: Account;
    }

    artifacts: {
        token: string;
        type: 'access' | 'refresh';
        sessionId: string;
    },
}

/**
 * Function type signature used in validation option for strategies.
 */
export type ValidateSignature = (r: Request, token: string) => Promise<IValidateToken>;
