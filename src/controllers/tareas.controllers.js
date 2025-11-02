import Tarea from "../models/tarea.js"

export const prueba = (req, res)=>{
    res.send('Prueba desde el controlador')
}

export const crearTarea = async (req, res)=>{
   try {
    //1- verificar que llegan los datos validados
    //2- pedir al modelo crear el objeto en la base de datos
    console.log(req.body)
    const tareaNueva = new Tarea(req.body)
    await tareaNueva.save()
    res.status(201).json({mensaje:"La tarea fue creada con exito"})
   } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrio un error al crear el producto"})
    
   }
}

export const listarTareas = async (req, res)=>{
   try {
    //1- buscar la collection de tareas
    const tareas = await Tarea.find()

    //2- enviar respuesta al front
    res.status(200).json(tareas)  //envio todo el array de tareas
    
   } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrio un error al listar las tareas"})
    
   }
}

export const obtenerTarea = async (req, res)=>{
   try {
    const id=req.params.id
    const tarea = await Tarea.findById(id)
    if (!tarea) {
        return res.status(404).json({mensaje: "No se encontro la tarea"})
    }
    
    res.status(200).json(tarea)
    
   } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrio un error al obtener la tarea"})
    
   }
}

export const borrarTarea = async (req, res)=>{
   try {
    const id=req.params.id
    const tarea = await Tarea.findById(id)
    if (!tarea) {
        return res.status(404).json({mensaje: "No se encontro la tarea"})
    }
    await Tarea.findByIdAndDelete(id)
    res.status(200).json({mensaje:"El producto fue eliminado correctamente"})
    
   } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrio un error al eliminar la tarea"})
    
   }
}

export const editarTarea = async (req, res)=>{
   try {
    const id=req.params.id
    const tarea = await Tarea.findById(id)
    if (!tarea) {
        return res.status(404).json({mensaje: "No se encontro la tarea"})
    }
    await Tarea.findByIdAndUpdate(id, req.body)
    res.status(200).json({mensaje:"El producto fue actualizado correctamente"})
    
   } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrio un error al editar la tarea"})
    
   }
}