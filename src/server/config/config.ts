import 'dotenv/config';

export default {
    app: {
        name: String(process.env.APP_NAME),
        url: String(process.env.BASE_URL),
        dbLink: String(process.env.DBLINK),
        redisLink: String(process.env.REDIS_LINK),
    },

    server: {
        port: String(process.env.SERVER_PORT),
        host: String(process.env.SERVER_HOST),
        prefix: String(process.env.SERVER_PREFIX),
    },
};
