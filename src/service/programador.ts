import db from '../data/DataBase';

const ProgramadorService = {
  getProgramadores() {
    return db.programadores;
  },
};

export default ProgramadorService;