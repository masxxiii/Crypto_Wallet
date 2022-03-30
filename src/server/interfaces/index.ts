/**
 * Response interface used in API response.
 */
export interface IResponse {
    ok: boolean,
    result?: object
}

/**
 * Query interface used in query.
 */
export interface IQuery {
    limit?: number;
    offset?: number;
}

/**
 * Pagination interface used in find and count call.
 */
export interface IPagination<T> {
    rows: T[];
    count: number;
}
