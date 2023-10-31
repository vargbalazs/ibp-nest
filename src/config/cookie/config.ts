import { registerAs } from '@nestjs/config';

export default registerAs('cookie', () => ({
  maxAgeAccessToken: process.env.MAX_AGE_ACCESS_TOKEN,
  maxAgeRefreshToken: process.env.MAX_AGE_REFRESH_TOKEN,
  httpOnly: process.env.HTTP_ONLY,
  secure: process.env.SECURE,
  sameSite: process.env.SAME_SITE,
}));
