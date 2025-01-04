export const config = () => ({
  port: parseInt(process.env.PORT || '3001', 10),
  env: process.env.ENV || 'local',
  database: {
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'postgres',
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT || '5432', 10)
  },
  docker: process.env.DOCKER || 'false'
})
