import DepartamentoDTO from '../dto/departamento';
import Departamento from '../model/departamento';
import db from '../data/DataBase';

const DepartamentoMapper = {
  toDTO(departamento: Departamento): DepartamentoDTO {
    let dep: DepartamentoDTO = {
      id: departamento.id,
      nombre: departamento.nombre,
      presupuesto: departamento.presupuesto,
      jefe: db.programadores.find(programador => programador.id === departamento.jefe),
      programadores: db.programadores.filter(programador => programador.departamento === departamento.id),
    };
    return dep;
  },
};

export default DepartamentoMapper;