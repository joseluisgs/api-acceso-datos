import Programador from '../model/programador';

export default interface Departamento {
  id: string;
  nombre: string;
  presupuesto: number;
  jefe?: Programador;
  programadores: Programador[];
}