import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;
  const authToken = authHeader?.split('Bearer ')[1];
  if (!authHeader || !authToken) {
    throw new ClientError(401, 'Authentication required');
  }
  const payload = jwt.verify(authToken, hashKey);
  req.user = payload as Request['user'];
  next();
}
