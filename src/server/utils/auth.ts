import * as jwt from 'jsonwebtoken';
import { JwtPayload, Secret, } from 'jsonwebtoken';
import config from '../config/config';
import { IDataJWT, ITokens, ValidateSignature, } from '../interfaces/auth';
import { ERRORS, } from '../errors/codes';
import { error, } from './index';
import { MESSAGES, } from '../errors/messages';

/**
 * Generates JWT tokens.
 *
 * @remarks
 * Signs the given payload into a JSON Web Token string payload
 *
 * @param payload - The data payload to be signed.
 *
 * @returns ITokens
 */
export const signPayload = (payload: string | Buffer | IDataJWT): ITokens => {
    const access = jwt.sign(
        payload,
        config.jwt.access.secret,
        { expiresIn: config.jwt.access.lifetime, }
    );
    const refresh = jwt.sign(
        payload,
        config.jwt.refresh.secret,
        { expiresIn: config.jwt.refresh.lifetime, }
    );

    return { access, refresh, };
};

/**
 * Verifies signed token.
 *
 * @remarks
 * Verifies token using a secret or public key to get the decoded data.
 *
 * @param token - The token to be verified.
 * @param secretOrPublicKey - The secret or public key.
 *
 * @returns Promise<JwtPayload|string>
 */
export const verifyToken = async (token: string, secretOrPublicKey: Secret)
    : Promise<JwtPayload | string> => {
    try {
        return await jwt.verify(token, secretOrPublicKey);
    }
    catch (e) {
        const code = e.name === 'TokenExpiredError'
            ? ERRORS.TOKEN_EXPIRED
            : ERRORS.TOKEN_INVALID;
        const message = e.name === 'TokenExpiredError'
            ? MESSAGES.TOKEN_EXPIRED
            : MESSAGES.TOKEN_INVALID;

        return error(code, message, {});
    }
};

/**
 * Validates a token based on its type.
 *
 * @remarks
 * Used in validate option to register auth strategies.
 *
 * @param tokenType - The token type.
 *
 * @returns ValidateSignature
 */
export function validateToken(tokenType: 'access' | 'refresh'): ValidateSignature {
    return async (r: Request, token: string) => {
        const data: IDataJWT | string = await verifyToken(
            token,
            config.jwt[String(tokenType)].secret
        );

        return { isValid: true, credentials: { account: '', }, artifacts: { token, type: tokenType, sessionId: '', }, };
    };
}
