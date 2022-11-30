import express from 'express';
import { getAirports, addAirport, getAirportById, editAirport, deleteAirport } from '../controller/airport-controller.js';

const router = express.Router();

router.get('/', getAirports);
router.post('/add', addAirport);
router.get('/:id', getAirportById);
router.put('/:id', editAirport);
router.delete('/:id', deleteAirport);

export default router;