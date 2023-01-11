import mongoose from 'mongoose'

const PruebaSchema = new mongoose.Schema({
    pj: {
      type: String,
      required: [true, 'Por favor ingresa un personaje.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    }
   
  })

  export default mongoose.models.Prueba || mongoose.model('Prueba', PruebaSchema)
