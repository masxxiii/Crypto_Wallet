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

    cors: {
        origins: JSON.parse(String(process.env.CORS_ORIGINS)),
        methods: JSON.parse(String(process.env.CORS_METHODS)),
        headers: JSON.parse(String(process.env.CORS_HEADERS)),
        maxAge: Number(process.env.CORS_MAX_AGE),
        allowCredentials: String(process.env.CORS_ALLOW_CREDENTIALS),
        exposeHeaders: JSON.parse(String(process.env.CORS_EXPOSE_HEADERS)),
    },
};
