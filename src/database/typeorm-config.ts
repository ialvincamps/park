
const dbConnection = () => {

  const config = {
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 0),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../database/entities/*{.ts,.js}'],
    synchronize: false,
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
    logging: false,
    migrationsTableName: 'migration',
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    cli: {
      entitiesDir: 'src/database/entities',
      migrationsDir: 'src/database/migrations',
      seedsDir: 'src/database/seeds'
    }
  };

  return config;
};

export default dbConnection;
