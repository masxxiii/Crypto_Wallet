import { Plugin, Server, } from '@hapi/hapi';
import * as HapiBearer from 'hapi-auth-bearer-token';
import { validateToken, } from '../utils/auth';

type StrategyOptions = Record<string, any>;

/**
 * Authentication strategies.
 *
 * @remarks
 * Strategy plugin that registers jwt-access,
 * and jwt-refresh schemes.
 */
export const AuthStrategies: Plugin<StrategyOptions> = {
    name: 'strategies',
    register: async (server: Server) => {
        await server.register([
            HapiBearer
        ]);
        server.auth.strategy('jwt-access', 'bearer-access-token', {
            validate: validateToken('access'),
        });
        server.auth.strategy('jwt-refresh', 'bearer-access-token', {
            validate: validateToken('refresh'),
        });
        server.auth.default('jwt-access');
    },
};
