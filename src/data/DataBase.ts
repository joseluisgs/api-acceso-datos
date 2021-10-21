// Mi Modelo de Datos
import Departamento from '../model/departamento';
import Programador from '../model/programador';

const DataBase: {
  departamentos: Departamento[],
  programadores: Programador[]
} = {
  departamentos: [
    {
      id: '111',
      nombre: 'Departamento de FrontEnd',
      presupuesto: 20_000,
      jefe: '111',
      programadores: ['222', '333', '444'],
    },
    {
      id: '222',
      nombre: 'Departamento de BackEnd',
      presupuesto: 25_000,
      jefe: '555',
      programadores: ['666', '777', '888'],
    },
    {
      id: '333',
      nombre: 'Departamento de FullStack',
      presupuesto: 18_000,
      jefe: '999',
      programadores: ['1000'],
    },
  ],

  programadores: [
    {
      id: '111',
      nombre: 'Juan Perez',
      experiencia: 1,
      departamento: '111',
      salario: 20_000,
      perfil: 'FrontEnd',
      fechaAlta: new Date('2020-01-01'),
      lenguajes:['VueJS', 'TypeScript'],
    },
    {
      id: '222',
      nombre: 'Pedro Martinez',
      experiencia: 2,
      departamento: '111',
      salario: 25_000,
      perfil: 'FrontEnd',
      fechaAlta: new Date('2020-01-10'),
      lenguajes: ['VueJS'],
    },
    {
      id: '333',
      nombre: 'Ana Gomez',
      experiencia: 3,
      departamento: '111',
      salario: 28_000,
      perfil: 'FrontEnd',
      fechaAlta: new Date('2020-02-01'),
      lenguajes: ['TypeScript'],
    },
    {
      id: '444',
      nombre: 'Elena Fernandez',
      experiencia: 4,
      departamento: '111',
      salario: 30_000,
      perfil: 'FrontEnd',
      fechaAlta: new Date('2020-01-01'),
      lenguajes: ['VueJS', 'TypeScript'],
    },
    {
      id: '555',
      nombre: 'Guillermo Guillotina',
      experiencia: 3,
      departamento: '222',
      salario: 30_000,
      perfil: 'BackEnd',
      fechaAlta: new Date('2021-01-01'),
      lenguajes: ['Java', 'NodeJS'],
    },
    {
      id: '666',
      nombre: 'Frank Cuesta',
      experiencia: 1,
      departamento: '222',
      salario: 10_000,
      perfil: 'BackEnd',
      fechaAlta: new Date('2019-01-01'),
      lenguajes: ['Java', 'NodeJS'],
    },
    {
      id: '777',
      nombre: 'Pepito Palotes',
      experiencia: 2,
      departamento: '222',
      salario: 15_000,
      perfil: 'BackEnd',
      fechaAlta: new Date('2020-04-04'),
      lenguajes: ['Java', 'NodeJS', 'TypeScript'],
    },
    {
      id: '888',
      nombre: 'Luis Lopez',
      experiencia: 3,
      departamento: '222',
      salario: 23_000,
      perfil: 'BackEnd',
      fechaAlta: new Date('2020-05-11'),
      lenguajes: ['Java'],
    },
    {
      id: '999',
      nombre: 'Son Goku',
      experiencia: 5,
      departamento: '333',
      salario: 35_000,
      perfil: 'FullStack',
      fechaAlta: new Date('2021-03-13'),
      lenguajes: ['TypeScript', 'Java', 'NodeJS'],
    },
    {
      id: '1000',
      nombre: 'Naruto Uzumaki',
      experiencia: 1,
      departamento: '333',
      salario: 20_000,
      perfil: 'FullStack',
      fechaAlta: new Date('2019-06-06'),
      lenguajes: ['VueJS', 'Java', 'NodeJS', 'TypeScript'],
    },
  ],

};

export default DataBase;