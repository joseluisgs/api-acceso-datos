import db from '../data/DataBase';
import DepartamentoDTO from '../dto/departamento';

const DepartamentoService = {
  getDepartamentos() {
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
    // TODO debemos devolver los objetos insertados 
  },
};

export default DepartamentoService;