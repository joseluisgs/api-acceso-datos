import express from 'express';
import { ApolloServer, Config, gql } from 'apollo-server-express';
import http from 'http';
import chalk from 'chalk';
import env from './env';
import config from './config';
import router from './router';


class Server {
  private PORT = env.PORT;

  private restPath =  env.REST_PATH;

  private app: express.Express;

  private servicio!: http.Server;

  private apolloServer!: ApolloServer;

  // Definición de tipos y Esquemas de GraphQL
  private typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  // Resolver para nuestros Esquemas
  private resolvers = {
    Query: {
      hello: () => '¡Hola API GraphQL 👋!',
    },
  };

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
      typeDefs: this.typeDefs,
      resolvers: this.resolvers,
    };
    
    // Inicializamos nuestro servidor Apollo con su configuración
    this.apolloServer = new ApolloServer(apolloConfig);
    await this.apolloServer.start();
    
    // Nuestro Express Server con Apollo
    this.apolloServer.applyMiddleware({ app: this.app,  });

    // Iniciamos nuestro servidor GraphQL y REST
    this.servicio = this.app.listen({ port: this.PORT }, () => {
      console.log(chalk.magenta(`🚀 Servidor API GraphQL listo en: http://localhost:4000${this.apolloServer.graphqlPath}`));
      console.log(chalk.blue(`🚀 Servidor API REST listo en: http://localhost:4000${this.restPath}`));
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

