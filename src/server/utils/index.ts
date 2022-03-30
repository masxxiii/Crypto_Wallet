import { v4 as uuidv4, } from 'uuid';
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

/**
 * UUID4 generator.
 *
 * @remarks
 * Generates a random version 4 UUID.
 *
 * @returns string
 */
export function getUUID(): string {
    return uuidv4();
}

/**
 * Current date.
 *
 * @remarks
 * Gets the date in the format Day-Month-Year.
 *
 * @returns string
 */
export function getDate(date: Date = new Date()) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
