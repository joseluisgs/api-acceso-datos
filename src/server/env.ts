/**
 * CONFIGURACIÓN DE LOS DATOS Y VARIABLES DE ENTORNO
 * Pueden llegar de un fichero .env, env.local, o desde el propio entorno de desarrollo
 */

import conf from 'dotenv';

// Cogemos el objeto que necesitamos .env
conf.config(); // Toda la configuración parseada del fichero .env

// 
const env = {
  // GENERAL
  NODE_ENV: process.env.NODE_ENV,
  ENV: process.env.ENV || 'development',
  DEBUG: Boolean(process.env.DEBUG) || true,
  HOST: process.env.HOST || 'localhost',
  PORT: Number(process.env.PORT) || 4000,
  TIMEZONE: process.env.TIMEZONE || 'Europe/Madrid',
};

// console.log('ENV: ', env);

export default env;