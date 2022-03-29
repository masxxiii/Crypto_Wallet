export const pinoConfig = () => ({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            crlf: false,
            jsonPretty: false,
            singleLine: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss',
            ignore: 'pid,hostname,v,tags,data',
            messageFormat: '{data}',
            customPrettifiers: {
                response: { messageFormat: '{req.url} - {req.method} - code:{req.statusCode}', },
            },
        },
    },
    serializers: {
        req: function customReqSerializer(req: any) {
            return {
                method: req.method,
                url: req.url,
                payload: req.payload,
            };
        },
        res: function customResSerializer(res: any) {
            return {
                code: res.statusCode,
                payload: res.result,
                data: res.data,
            };
        },
    },
    logPayload: true,
    logEvents: ['response', 'request'],
    logQueryParams: true,
});
