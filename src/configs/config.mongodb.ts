import 'dotenv/config';

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3056
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'shopDEV',
  }
}

const pro = {
  app: {
    port: process.env.PRO_APP_PORT || 3000
  },
  db: {
    host: process.env.PRO_DB_HOST || 'localhost',
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.PRO_DB_NAME || 'shopPRO',
  }
}

const config: any = {dev, pro}

const env: any = process.env.NODE_ENV || 'dev'

// console.log(config[env], env);

export default config[env]