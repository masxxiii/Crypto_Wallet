import { IResponse, } from '../interfaces';

/**
 * Response function.
 *
 * @remarks
 * Used in server handlers to define our response data.
 *
 * @param res - The response object.
 *
 * @returns IResponse
 */
export function response(res?: object | undefined): IResponse {
    return {
        ok: true,
        result: res,
    };
}
