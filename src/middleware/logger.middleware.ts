import { Logger } from '@nestjs/common';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import { ExtractJwt } from 'passport-jwt';

export function LoggerMiddleware(
  req: express.Request,
  res: express.Response,
  next: Function,
) {
  if (req && req.method !== 'HEAD') Logger.log(formatRequest(req));
  next();
}

function formatRequest(req: express.Request) {
  const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
  const parsedToken = jwt.decode(token);
  return JSON.stringify({
    operatorId: _.get(parsedToken, 'id', undefined),
    path: req.path,
    method: req.method,
    params: req.params,
    body: req.body,
    query: req.query,
    // headers: req.headers,
    // token: req.headers.authorization || req.headers.token,
  });
}
