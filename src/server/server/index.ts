import * as Hapi from '@hapi/hapi';
import { Server, } from '@hapi/hapi';
import { options, } from './options';
import { plugins, } from '../plugins';
import config from '../config/config';

export const server = new Hapi.Server(options);

export const init = async (): Promise<Server> => {
    server.realm.modifiers.route.prefix = config.server.prefix;
    await server.register(plugins);

    try {
        await server.start();
        server.log('[INFO]', `Server running at: ${server.info.uri}`);
    }
    catch (err) {
        server.log('[ERROR]', JSON.stringify(err));
    }

    return server;
};
