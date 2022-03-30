import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import { IDataJWT, ITokens, } from '../interfaces/auth';

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
export const signPayload = (payload: IDataJWT): ITokens => {
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
