const configurations = () => ({
  port: parseInt(process.env.PORT ?? '', 10) || 3000,
  database: {
    name: process.env.DATABASE_NAME ?? '',
    host: process.env.DATABASE_HOST ?? '',
    username: process.env.DATABASE_USERNAME ?? '',
    password: process.env.DATABASE_PASSWORD ?? '',
  },
});

export default configurations;
