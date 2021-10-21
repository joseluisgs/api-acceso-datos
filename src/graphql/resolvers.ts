// Realizamos los resolvers de nuestras Querys y Mutaciones para
// de nuestra API GraphQL
import DepartamentoService from '../service/departamento';
import ProgramadorService from '../service/programador';

// Querys o Gets
const Query = {
  hello: () => '¡Hola API GraphQL 👋!',

  // Departamentos
  getDepartamentos: () => { return DepartamentoService.getAll(); },
  getDepartamentoByID: (obj: any, args: any) => { return DepartamentoService.getByID(args.id); },
  getProgramadoresByID: (obj: any, args: any) => { return DepartamentoService.getProgramadorByID((args.id)); },
  getJefeByID: (obj: any, args: any) => { return DepartamentoService.getJefeByID(args.id); },

  // Programadores
  getProgramadores: () => { return ProgramadorService.getAll(); },
  getProgramadorByID: (obj: any, args: any) => { return ProgramadorService.getByID(args.id); },
  getProgramadoresByDepartamentoID: (obj: any, args: any) => { return ProgramadorService.getByDepartamentoID(args.departamentoID); },
  getProgramadoresByPerfil: (obj: any, args: any) => { return ProgramadorService.getByPerfil(args.perfil); },
  getProgramadoresByLenguaje: (obj: any, args: any) => { return ProgramadorService.getByLenguaje(args.lenguaje); },
};

const resolvers = {
  // Por cada tipo de datos indicamos su resoluciones o funciones a realizar
  Query,
  // Mutaciones

  // Suscripciones
};

export default resolvers;