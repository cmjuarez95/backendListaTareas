import { Router } from "express";




const router = Router()


router.route('/').get((req, res)=>{
    res.send('Prueba desde el controlador')
})

export default router