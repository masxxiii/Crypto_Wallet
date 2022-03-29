import 'dotenv/config';

export default {
    app: {
        name: String(process.env.APP_NAME),
        url: String(process.env.BASE_URL),
        dbLink: String(process.env.DBLINK),
        redisLink: String(process.env.REDIS_LINK),
    },
};
