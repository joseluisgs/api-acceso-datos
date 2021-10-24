import { v4 as uuidv4 } from 'uuid';
import db from '../data/DataBase';

const ProgramadorService = {

  getAll() {
    return db.programadores;
  },

  getByID(id: string) {
    const programador = db.programadores.find(p => p.id === id);
    if (programador) {
      return programador;
    } else {
      throw new Error('No existe programador con ID: ' + id);
    }
  },

  getByDepartamentoID(id: string) {
    console.log(id);
    const programadores = db.programadores.filter(p => p.departamento == id);
    if (programadores) {
      return programadores;
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },

  getByPerfil(perfil: string) {
    console.log(perfil);
    const programadores = db.programadores.filter(p => p.perfil == perfil);
    if (programadores) {
      return programadores;
    } else {
      throw new Error('No existe perfil: ' + perfil);
    }
  },

  getByLenguaje(lenguaje: string) {
    const programadores = db.programadores.filter(p => p.lenguajes.includes(lenguaje));
    if (programadores) {
      return programadores;
    } else {
      throw new Error('No existe lenguaje: ' + lenguaje);
    }
  },

  addProgramador(nombre: string, experiencia: number, salario: number, perfil: string, departamento_id: string,
    fechaAlta: Date, lenguajes: string[]) {
    const programador = {
      id: uuidv4(),
      nombre,
      experiencia,
      salario,
      perfil,
      departamento: departamento_id,
      fechaAlta,
      lenguajes: lenguajes,
    };
    db.programadores.push(programador);
    return programador;
  },

  deleteProgramadorByID(id: string) {
    const programador = db.programadores.find(p => p.id === id);
    if (programador) {
      db.programadores = db.programadores.filter(p => p.id !== id);
      return programador;
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },

  updateProgramador(id: string, nombre: string, experiencia: number, salario: number, perfil: string, departamento_id: string,
    fechaAlta: Date, lenguajes: string[]) {
    const programador = db.programadores.find(p => p.id === id);
    if (programador) {
      programador.nombre = nombre;
      programador.experiencia = experiencia;
      programador.salario = salario;
      programador.perfil = perfil;
      programador.departamento = departamento_id;
      programador.fechaAlta = fechaAlta;
      programador.lenguajes = lenguajes;
      db.programadores = db.programadores.map(p => p.id !== programador.id ? p : programador);
      return programador;
    }
    throw new Error('No existe programador con ID: ' + id);
  },
};

export default ProgramadorService;