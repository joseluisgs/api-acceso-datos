// Endpoint /departamento

import express, { Request, Response } from 'express';
import DepartamentoService from '../service/departamento';

const departamentoRouter = express.Router();

// GET Listar todos los elementos: Cualquiera
departamentoRouter.get('/', (req: Request, res: Response) => {
  try {
    return res.status(200).json(DepartamentoService.getAll());
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// GET Obtiene un elemento por por ID: Cualquiera
departamentoRouter.get('/:id', (req: Request, res: Response) => {
  try {
    return res.status(200).json(DepartamentoService.getByID(req.params.id));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// GET Obtiene la lista de programadores por Departamento ID
departamentoRouter.get('/:id/programadores', (req: Request, res: Response) => {
  try {
    return res.status(200).json(DepartamentoService.getProgramadorByID(req.params.id));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// GET Obtiene el jefe de un departamento por su ID
departamentoRouter.get('/:id/jefe', (req: Request, res: Response) => {
  try {
    return res.status(200).json(DepartamentoService.getJefeByID(req.params.id));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// POST Inserta un departamento
departamentoRouter.post('/', (req: Request, res: Response) => {
  try {
    return res.status(201).json(
      DepartamentoService.addDepartamento(req.body.nombre, req.body.presupuesto, req.body.id_jefe),
    );
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});

// DELETE Elimina un Departamento dado su ID
departamentoRouter.delete('/:id', (req: Request, res: Response) => {
  try {
    return res.status(200).json(DepartamentoService.deleteDepartamentoByID(req.params.id));
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      mensaje: err.toString(),
    });
  }
});





export default departamentoRouter;