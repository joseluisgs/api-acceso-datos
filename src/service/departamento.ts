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
  getByID(id: any) {
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      return DepartamentoMapper.toDTO(departamento);
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },
  getProgramadorByID(id: any) {
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      return db.programadores.filter(programador => programador.departamento === departamento.id);
    } else {
      throw new Error('No existe departamento con ID: ' + id);
    }
  },
  getJefeByID(id: any) {
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
};

export default DepartamentoService;