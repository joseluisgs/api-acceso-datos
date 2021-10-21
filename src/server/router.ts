/**
  * ENRUTADOR
  * Enrutador central
*/

import express from 'express';

// exportamos los módulos
export default (app: express.Express, restPath: string) => {
  // Hola API
  app.get(restPath, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(
      {
        'data': {
          'hello': '¡Hola API REST 👋!',
        },
      }));
  });
};