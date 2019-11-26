"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const passport_jwt_1 = require("passport-jwt");
function LoggerMiddleware(req, res, next) {
    if (req && req.method !== 'HEAD')
        common_1.Logger.log(formatRequest(req));
    next();
}
exports.LoggerMiddleware = LoggerMiddleware;
function formatRequest(req) {
    const token = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    const parsedToken = jwt.decode(token);
    return JSON.stringify({
        operatorId: _.get(parsedToken, 'id', undefined),
        path: req.path,
        method: req.method,
        params: req.params,
        body: req.body,
        query: req.query,
    });
}
//# sourceMappingURL=logger.middleware.js.map