import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTareas, obtenerTarea, prueba } from "../controllers/tareas.controllers.js";



const router = Router()


router.route('/test').get(prueba)
router.route('/').post(crearTarea).get(listarTareas)
router.route('/:id').get(obtenerTarea).delete(borrarTarea).put(editarTarea)

export default router