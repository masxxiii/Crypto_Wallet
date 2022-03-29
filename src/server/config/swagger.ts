import config from './config';

export default {
    pathPrefixSize: 2,
    basePath: `${config.server.prefix}/`,
    host: config.app.url,
    grouping: 'tags',
    info: {
        title: `${config.app.name} API Documentation`,
        version: process.env.npm_package_version,
        description: 'Endpoints of the API.\n\n'
            + 'To view <b>swagger.json</b>, [click here](/api/documentation.json).',
    },
    jsonPath: '/documentation.json',
    documentationPath: '/documentation',
    schemes: [],
    debug: true,
    securityDefinitions: {
        BearerToken: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            'x-keyPrefix': 'Bearer',
        },
    },
    security: [{ BearerToken: [], }],
};
