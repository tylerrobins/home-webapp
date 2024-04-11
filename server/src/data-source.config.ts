import { DataSource } from "typeorm";
import path from 'path';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'tylerrobins',
    password: 'tylerrobins',
    database: 'homeapp',
    synchronize: true, // This will auto create schema, should be false in production
    logging: false,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [path.join(__dirname, '/entity/**/*.entity.{ts,js}')],
});