import mongoose from 'mongoose'

const MONGODB_URI = process.env.DB // recupero la cadena de conexion para usar MongoDB Atlas
let cached = global.mongoose

if (!cached) { // la conexión se cachea para evitar que se conecte varias veces
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise

  return cached.conn
}

export default dbConnect
