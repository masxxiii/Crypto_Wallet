import * as Pino from 'hapi-pino';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as HapiSwagger from 'hapi-swagger';
import { ServerRegisterPluginObject, } from '@hapi/hapi';
import SwaggerOptions from '../config/swagger';
import { pinoConfig, } from '../config/pino';
import { Websocket, } from './websocket';
import { AuthStrategies, } from './strategies';

/**
 * Server plugins object.
 *
 * @remarks
 * Specifying plugins for the server.
 */
export const plugins: Array<ServerRegisterPluginObject<any>> = [
    {
        plugin: Inert,
        options: {},
    },
    {
        plugin: Vision,
        options: {},
    },
    {
        plugin: HapiSwagger,
        options: SwaggerOptions,
    },
    {
        plugin: Pino,
        options: pinoConfig(),
    },
    {
        plugin: Websocket,
        options: {},
        routes: { prefix: '/ws', },
    },
    {
        plugin: AuthStrategies,
        options: {},
    }
];
