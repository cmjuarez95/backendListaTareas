import mongoose, { mongo } from "mongoose";

try {
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.info("BD conectada con exito")
    })

}catch(error){
    console.error(error)
}

export default mongoose