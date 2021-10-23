import { v4 as uuidv4 } from 'uuid';
import db from '../data/DataBase';
import DepartamentoDTO from '../dto/departamento';
import DepartamentoMapper from '../mapper/departamento';

const DepartamentoService = {

  getAll() {
    const departamentos = db.departamentos;
    let lista : DepartamentoDTO[] = []; 
    // Recorremos todos los departamentos para asignarles los empleados
    departamentos.forEach((departamento) => {
      lista.push(DepartamentoMapper.toDTO(departamento));
    });
    return lista;
  },

  getByID(id: string) {
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      return DepartamentoMapper.toDTO(departamento);
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },

  getProgramadorByID(id: string) {
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      return db.programadores.filter(programador => programador.departamento === departamento.id);
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },

  getJefeByID(id: string) {
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      return db.programadores.find(programador => programador.id === departamento.jefe);
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },

  addDepartamento(nombre: string, presupuesto: number, id_jefe: string) {
    const departamento = {
      id: uuidv4(),
      nombre,
      presupuesto,
      jefe: id_jefe,
      programadores: [],
    };
    db.departamentos.push(departamento);
    return DepartamentoMapper.toDTO(departamento);
  },

  deleteDepartamentoByID(id: string) {
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      db.departamentos = db.departamentos.filter(d => d.id !== id);
      return DepartamentoMapper.toDTO(departamento);
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },

  updateDepartamento(id: string, nombre: string, presupuesto: number, id_jefe: string) {
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      departamento.nombre = nombre;
      departamento.presupuesto = presupuesto;
      departamento.jefe = id_jefe;
      db.departamentos = db.departamentos.map(d => d.id !== departamento.id ? d : departamento);
      return DepartamentoMapper.toDTO(departamento);
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },

  addProgramadorDepartamento(id: string, id_programador: string) {
    // Buscamos el departamento
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      // Buscamos el programador
      const programador = db.programadores.find(p => p.id === id_programador);
      if (programador) {
        const depEmpleado = db.departamentos.find(d => d.programadores.find(p => p === id_programador));
        if (depEmpleado) 
          depEmpleado.programadores = depEmpleado.programadores.filter(p => p !== id_programador);
        //Actualizamos 
        departamento.programadores.push(id_programador);
        programador.departamento = id;
        return DepartamentoMapper.toDTO(departamento);
      } else {
        throw new Error('No existe programador con ID: ' + id_programador);
      }
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },

};

export default DepartamentoService;