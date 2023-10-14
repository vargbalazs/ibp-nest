import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  databaseType: process.env.DATABASE_TYPE,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: process.env.PG_SSL,
  endpointId: process.env.PG_ENDPOINT_ID,
  logging: process.env.LOGGING,
  synchronize: process.env.SYNCHRONIZE,
}));
