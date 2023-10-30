import { registerAs } from '@nestjs/config';

export default registerAs('cookie', () => ({
  maxAge: process.env.MAX_AGE,
  httpOnly: process.env.HTTP_ONLY,
  secure: process.env.SECURE,
  sameSite: process.env.SAME_SITE,
}));
