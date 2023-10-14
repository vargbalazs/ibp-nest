export interface Config {
  databaseType: string;
  host: string;
  database: string;
  user: string;
  password: string;
  port: number;
  ssl: boolean;
  endpointId: string;
  logging: boolean;
  synchronize: boolean;
}
