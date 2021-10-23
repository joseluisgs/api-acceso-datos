# API - Acceso a Datos
Sencilla API para ser consumida siguiendo REST o GraphQL

[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6)](https://www.typescriptlang.org/)
[![Code Style](https://img.shields.io/badge/Lint%20Style-AirBnB-ff69b4)](https://airbnb.io/javascript)
[![Licence](https://img.shields.io/github/license/joseluisgs/photo-gallery-ionic)](./LICENSE)
![GitHub](https://img.shields.io/github/last-commit/joseluisgs/api-acceso-datos)


![imagen](./images/rest-graphql.png)

- [API - Acceso a Datos](#api---acceso-a-datos)
  - [Acerca de](#acerca-de)
  - [Consumo de la API](#consumo-de-la-api)
    - [Cliente GraphQL - Apollo Client](#cliente-graphql---apollo-client)
    - [Cliente REST](#cliente-rest)
  - [Despliegue](#despliegue)
    - [Con NodeJS](#con-nodejs)
      - [Instalación](#instalación)
      - [Ejecución](#ejecución)
      - [Ejecución Modo Dev](#ejecución-modo-dev)
      - [Ejecución con Nodemon](#ejecución-con-nodemon)
      - [Linter](#linter)
  - [Postman](#postman)
  - [Extensiones de interés](#extensiones-de-interés)
  - [Autor](#autor)
    - [Contacto](#contacto)
  - [Licencia](#licencia)


## Acerca de
Esta sencilla API con usos docentes será utilizada para consumir y manipular información en Acceso a Datos mediante REST o GraphQL usando distintos clientes. de esta manera podrás ver como funcionan estas dos modalidades de consumir datos bajo un servicio web y decidir cuál de ellas se dapta mejor a tus proyectos, puedes elegir entre las dos, o las dos a la vez según tus necesidades.

![imagen2](./images/comparable.png)


## Consumo de la API
Puedes consumir esta API usando un cliente REST o GraphQL que desees.

### Cliente GraphQL - Apollo Client
Puedes usar el propio cliente Apollo para hacer tus consultas desde el endpoint de la API: http://url:port/graphql, por ejemplo: http://localhost:4000/graphql. También puedes usar Postman y el fichero con ejemplos de la carpeta postman.

### Cliente REST
Puedes usar tu cliente rest favorito para hacer tus consultas desde el endpoint de la API: http://url:port/rest, por ejemplo: http://localhost:4000/rest. También puedes usar Postman y el fichero con ejemplos de la carpeta postman.

## Despliegue
### Con NodeJS
#### Instalación
```bash
npm install
```

#### Ejecución
```bash
npm start
```

#### Ejecución Modo Dev
```bash
npm run dev
```

#### Ejecución con Nodemon
```bash
npm run dev:watch
```

#### Linter
```bash
npm run lint
o
npm run lint:fix
```
## Postman
Se incluye el fichero para usar y ver las consultas con [Postman](https://www.postman.com/). Con este cliente podrás hacer tus peticiones REST y GraphQL.


## Extensiones de interés
- GraphQL: Para visualizar y lanzar tus consultas GraphQL.
- ThunderClient: Para visualizar y lanzar tus consultas REST.



## Autor

Codificado con :sparkling_heart: por [José Luis González Sánchez](https://twitter.com/joseluisgonsan)

[![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)](https://twitter.com/joseluisgonsan)
[![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)](https://github.com/joseluisgs)

### Contacto
<p>
  Cualquier cosa que necesites házmelo saber por si puedo ayudarte 💬.
</p>
<p>
    <a href="https://twitter.com/joseluisgonsan" target="_blank">
        <img src="https://i.imgur.com/U4Uiaef.png" 
    height="30">
    </a> &nbsp;&nbsp;
    <a href="https://github.com/joseluisgs" target="_blank">
        <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" 
    height="30">
    </a> &nbsp;&nbsp;
    <a href="https://www.linkedin.com/in/joseluisgonsan" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" 
    height="30">
    </a>  &nbsp;&nbsp;
    <a href="https://joseluisgs.github.io/" target="_blank">
        <img src="https://joseluisgs.github.io/favicon.png" 
    height="30">
    </a>
</p>


## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero
[LICENSE](./LICENSE) para su uso docente y educativo.
