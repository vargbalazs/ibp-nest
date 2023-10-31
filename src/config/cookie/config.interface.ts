export interface Config {
  maxAgeAccessToken: number;
  maxAgeRefreshToken: number;
  httpOnly: boolean;
  secure: boolean;
  sameSite: boolean | 'lax' | 'strict' | 'none';
}
