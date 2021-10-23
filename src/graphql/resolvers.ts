// Realizamos los resolvers de nuestras Querys y Mutaciones para
// de nuestra API GraphQL
import DepartamentoService from '../service/departamento';
import ProgramadorService from '../service/programador';

// Querys o Gets
const Query = {
  hello: () => '¡Hola API GraphQL 👋!',

  // Departamentos
  getDepartamentos: () => {
    return DepartamentoService.getAll();
  },

  getDepartamentoByID: (obj: any, { id }: any) => {
    return DepartamentoService.getByID(id);
  },

  getProgramadoresByID: (obj: any, { id }: any) => {
    return DepartamentoService.getProgramadorByID((id));
  },

  getJefeByID: (obj: any, { id }: any) => {
    return DepartamentoService.getJefeByID(id);
  },

  // Programadores
  getProgramadores: () => {
    return ProgramadorService.getAll();
  },

  getProgramadorByID: (obj: any, { id }: any) => {
    return ProgramadorService.getByID(id);
  },

  getProgramadoresByDepartamentoID: (obj: any, { departamentoID }: any) => {
    return ProgramadorService.getByDepartamentoID(departamentoID);
  },

  getProgramadoresByPerfil: (obj: any, { perfil }: any) => {
    return ProgramadorService.getByPerfil(perfil);
  },

  getProgramadoresByLenguaje: (obj: any, { lenguaje }: any) => {
    return ProgramadorService.getByLenguaje(lenguaje);
  },
};

const Mutation = {

  // Departamentos
  addDepartamento: (obj: any, { nombre, presupuesto, id_jefe }: any) => {
    return DepartamentoService.addDepartamento(nombre, presupuesto, id_jefe);
  },

  deleteDepartamento: (obj: any, { id }: any) => {
    return DepartamentoService.deleteDepartamentoByID(id);
  },

  updateDepartamento: (obj: any, { id, nombre, presupuesto, id_jefe }: any) => {
    return DepartamentoService.updateDepartamento(id, nombre, presupuesto, id_jefe);
  },

  addProgramadorDepartamento: (obj: any, { id, id_programador }: any) => {
    return DepartamentoService.addProgramadorDepartamento(id, id_programador);
  },

  // removeProgramadorDepartamento: (obj: any, { id, id_programador }: any) => {
  //   return DepartamentoService.removeProgramadorDepartamento(id, id_programador);
  // },

  // Programadores
  addProgramador: (obj: any, { nombre, experiencia, salario, perfil, departamento_id, fechaAlta, lenguajes }: any) => {
    return ProgramadorService.addProgramador(nombre, experiencia, salario, perfil, departamento_id, fechaAlta, lenguajes);
  },

  deleteProgramador: (obj: any, { id }: any) => {
    return ProgramadorService.deleteProgramadorByID(id);
  },

  updateProgramador: (obj: any, { id, nombre, experiencia, salario, perfil, departamento_id, fechaAlta, lenguajes }: any) => {
    return ProgramadorService.updateProgramador(id, nombre, experiencia, salario, perfil, departamento_id, fechaAlta, lenguajes);
  },
};

const resolvers = {
  // Por cada tipo de datos indicamos su resoluciones o funciones a realizar
  Query,
  // Mutaciones
  Mutation,

  // Suscripciones
};

export default resolvers;