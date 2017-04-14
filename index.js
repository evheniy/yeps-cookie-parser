const debug = require('debug')('yeps:cookie');
const cookie = require('cookie');

module.exports = () => async context => {

    debug('Cookie parser');

    context.request = context.request || {};

    debug('Headers: %O', context.req.headers);
    debug('Cookies: %O', context.req.headers.cookie);

    try {
        context.request.cookies = cookie.parse(context.req.headers.cookie);
    } catch (error) {
        context.request.cookies = {};

        debug(error);
    }

    debug(context.request.cookies);
};
