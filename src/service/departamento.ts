import db from '../data/DataBase';
import DepartamentoDTO from '../dto/departamento';

const DepartamentoService = {
  getAll() {
    const departamentos = db.departamentos;
    let lista : DepartamentoDTO[] = []; 
    // Recorremos todos los departamentos para asignarles los empleados
    departamentos.forEach((departamento) => {
      let dep: DepartamentoDTO = {
        id: departamento.id,
        nombre: departamento.nombre,
        presupuesto: departamento.presupuesto,
        jefe: db.programadores.find(programador => programador.id === departamento.jefe),
        programadores: db.programadores.filter(programador => programador.departamento === departamento.id),
      };
      lista.push(dep);
    });
    return lista;
  },
  getByID(id: any) {
    const departamento = db.departamentos.find(d => d.id === id);
    if (departamento) {
      let dep: DepartamentoDTO = {
        id: departamento.id,
        nombre: departamento.nombre,
        presupuesto: departamento.presupuesto,
        jefe: db.programadores.find(programador => programador.id === departamento.jefe),
        programadores: db.programadores.filter(programador => programador.departamento === departamento.id),
      };
      return dep;
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
};

export default DepartamentoService;