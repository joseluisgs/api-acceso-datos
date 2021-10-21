// Realizamos los resolvers de nuestras Querys y Mutaciones para
// de nuestra API GraphQL
import DepartamentoService from '../service/departamento';
import ProgramadorService from '../service/programador';

// Querys o Gets
const Query = {
  hello: () => '¡Hola API GraphQL 👋!',

  // Departamentos
  getDepartamentos: () => { return DepartamentoService.getDepartamentos(); },

  // Programadores
  getProgramadores: () => { return ProgramadorService.getProgramadores(); },
  
};

const resolvers = {
  // Por cada tipo de datos indicamos su resoluciones o funciones a realizar
  Query,
  // Mutaciones

  // Suscripciones
};

export default resolvers;