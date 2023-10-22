import { JwtPayload } from './jwt-payload.interface';

export interface PassportRequest {
  user: JwtPayload & { refreshToken: string };
}
