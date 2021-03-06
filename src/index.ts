import express from 'express';
import { ApolloServer, Config } from 'apollo-server-express';
import { AddressInfo } from 'node:net';
import http from 'http';
import chalk from 'chalk';

import env from './server/env';
import config from './server/config';
import router from './server/router';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

class Server {
  private PORT = env.PORT;

  private restPath = '/rest';

  private app: express.Express;

  private servicio!: http.Server;

  private apolloServer!: ApolloServer;

  constructor() {
    // Creamos nuestro Express
    this.app = express();
  }

  // Mutaciones para nuestros esquemas
  async start() {
    // Le aplicamos la configuración a Express
    config(this.app);
    // Le aplicamos nuestro router a Express para REST
    router(this.app, this.restPath);

    // Configuración de Apollo server
    const apolloConfig: Config = {
      typeDefs: schema,
      resolvers: resolvers,
    };

    // Inicializamos nuestro servidor Apollo con su configuración
    this.apolloServer = new ApolloServer(apolloConfig);
    await this.apolloServer.start();

    // Nuestro Express Server con Apollo
    this.apolloServer.applyMiddleware({ app: this.app });

    // Iniciamos nuestro servidor GraphQL y REST
    this.servicio = this.app.listen({ port: this.PORT }, () => {
      // Obtenemos nuestra dirección
      const address = this.servicio.address() as AddressInfo;
      const host = address.address === '::' ? 'localhost' : address.address; // dependiendo de la dirección asi configuramos

      console.log(chalk.magenta(`🚀 Servidor API GraphQL listo en: http://${host}:${this.PORT}${this.apolloServer.graphqlPath}`));
      console.log(chalk.blue(`🚀 Servidor API REST listo en: http://${host}:${this.PORT}${this.restPath}`));
    });
  }

  async close() {
    // Desconectamos el socket server
    this.servicio.close();
    if (process.env.NODE_ENV !== 'test') {
      console.log(chalk.grey.bold('⚪️ Servidor parado ❎'));
    }
  }
}

/**
* Devuelve la instancia de conexión siempre la misma, singleton
*/
const server = new Server();
// Exportamos el servidor inicializado
export default server;

// La siguiente sección de código sólo se ejecutará si este fichero es el punto de entrada del programa principal
// Lo hacemos porque también lo llamamos en test.
if (require.main === module) {
  server.start();
}

process.on('unhandledRejection', (err) => {
  console.log(chalk.red('❌ Custom Error: An unhandledRejection occurred'));
  console.log(chalk.red(`❌ Custom Error: Rejection: ${err}`));
});

