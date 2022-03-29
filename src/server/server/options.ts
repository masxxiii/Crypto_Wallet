import * as Qs from 'qs';
import { Util, } from 'hapi';
import { ServerOptions, } from '@hapi/hapi';
import config from '../config/config';
import Dictionary = Util.Dictionary;
import { handleValidationError, } from '../utils';

/**
 * Server options object.
 *
 * @remarks
 * Specifying options for the server.
 */
export const options: ServerOptions = {
    port: config.server.port,
    host: config.server.host,
    query: {
        parser: (query: Dictionary<string>) => Qs.parse(query),
    },
    routes: {
        validate: {
            options: {
                abortEarly: false,
            },
            failAction: handleValidationError,
        },
        response: {
            failAction: 'log',
        },
    },
};
