/*  ************************* ERROR CODES ************************* */

/**
 * Returns an error code
 *
 * @remarks
 * The enum contains all the HTTPS error codes used in the project.
 * 1xx: Informational
 * 2xx: Success
 * 3xx: Redirection
 * 4xx: Client Error
 * 5xx: Server Error
 */
export enum ERRORS {
    BAD_REQUEST = 400000, // Bad Request
    UNAUTHORIZED = 401000, // Unauthorized
    TOKEN_EXPIRED = 401001, // Token Has Expired
    TOKEN_INVALID = 401002, // Token Is Invalid
    SESSION_NOT_FOUND = 401003, // Session Not Found
    SESSION_SUSPICIOUS = 401004, // Session Is Suspicious
    FORBIDDEN = 403000, // Forbidden
    UNSUPPORTED_FILE = 403001, // Unsupported File Type
    NOT_FOUND = 404000, // Not Found
    PAYLOAD_LARGE = 413000, // Payload Too Large
    SERVER_ERROR = 500000, // Internal Server Error
    BAD_GATEWAY = 502000, // Bad Gateway
    SERVICE_NOT = 503000, // Service Unavailable
    GATEWAY_TIMEOUT = 503000, // Gateway Timeout
}
