/*  ************************* ERROR MESSAGES ************************* */

/**
 * Returns error message
 *
 * @remarks
 * The enum contains all the https error messages needed in our project.
 */
export enum MESSAGES {
    BAD_REQUEST = 'Bad Request',
    UNAUTHORIZED = 'Unauthorized',
    FORBIDDEN = 'Forbidden',
    UNSUPPORTED_FILE = 'Unsupported File Type',
    NOT_FOUND = 'Not Found',
    PAYLOAD_LARGE = 'Payload Too Large',
    SERVER_ERROR = 'Internal Server Error',
    BAD_GATEWAY = 'Bad Gateway',
    SERVICE_NOT = 'Service Unavailable',
    GATEWAY_TIMEOUT = 'Gateway Timeout',
}
