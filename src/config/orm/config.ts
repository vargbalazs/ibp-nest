import { registerAs } from '@nestjs/config';

export default registerAs('orm', () => ({
  logging: process.env.LOGGING,
  synchronize: process.env.SYNCHRONIZE,
  databaseType: process.env.DATABASE_TYPE,
  autoLoadEntities: process.env.AUTOLOAD_ENTITIES,
}));
