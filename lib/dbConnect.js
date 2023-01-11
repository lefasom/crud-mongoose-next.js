import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
mongoose.set('strictQuery', true);
const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
     
      bufferCommands: false,
  
     
  
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
 
  console.log('mongoDB conectado =)')
}

export default dbConnect
