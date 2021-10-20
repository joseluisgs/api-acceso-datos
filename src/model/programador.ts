import { Perfil } from './perfil';
import { Lenguaje } from './lenguaje';

export default interface Programador {
  id: string;
  nombre: string;
  experiencia: number;
  departamento: string;
  salario: number;
  perfil: Perfil;
  fechaAlta: Date;
  lenguajes: Lenguaje[];
}