import * as server from './server/server/index';

server.init().then().catch((err) => {
    console.log('[ERROR]', err);
});
