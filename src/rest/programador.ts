// Endpoint /programador

import express, { Request, Response } from 'express';
import ProgramadorService from '../service/programador';

const programadorRouter = express.Router();

// GET Listar todos los elementos: Cualquiera
programadorRouter.get('/', (req: Request, res: Response) => {
  try {
    // Maquillamos el JSON para quitar los campos de MongoDB no nos interesen
    return res.status(200).json(ProgramadorService.getAll());
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// GET Obtiene un elemento por por ID: Cualquiera
programadorRouter.get('/:id', (req: Request, res: Response) => {
  try {
    return res.status(200).json(ProgramadorService.getByID(req.params.id));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// GET Programadores dado el departamento id
programadorRouter.get('/departamento/:departamentoID', (req: Request, res: Response) => {
  try {
    return res.status(200).json(ProgramadorService.getByDepartamentoID(req.params.departamentoID));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// GET Programadores dado el perfil
programadorRouter.get('/perfil/:perfil', (req: Request, res: Response) => {
  try {
    return res.status(200).json(ProgramadorService.getByPerfil(req.params.perfil));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// GET Programadores dado el lenguaje
programadorRouter.get('/lenguaje/:lenguaje', (req: Request, res: Response) => {
  try {
    return res.status(200).json(ProgramadorService.getByLenguaje(req.params.lenguaje));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// POST Inserta un Programador
programadorRouter.post('/', (req: Request, res: Response) => {
  try {
    return res.status(201).json(
      ProgramadorService.addProgramador(req.body.nombre, req.body.experiencia, req.body.salario, req.body.perfil,
        req.body.departamento_id, req.body.fechaAlta, req.body.lenguajes),
    );
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// DELETE Elimina un Programador dado su ID
programadorRouter.delete('/:id', (req: Request, res: Response) => {
  try {
    return res.status(200).json(ProgramadorService.deleteProgramadorByID(req.params.id));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// UPDATE Actualiza un elemento dado su id
programadorRouter.put('/:id', (req: Request, res: Response) => {
  try {
    return res.status(200).json(
      ProgramadorService.updateProgramador(req.params.id, req.body.nombre, req.body.experiencia, req.body.salario,
        req.body.perfil, req.body.departamento_id, req.body.fechaAlta, req.body.lenguajes),
    );
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});




export default programadorRouter;