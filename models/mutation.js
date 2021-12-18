import mongoose from 'mongoose'

const MutationSchema = new mongoose.Schema({ //el schema es una estructura de datos para prevenir errores
  count_mutations: {
    type: Number,
  },
  count_no_mutation: {
    type: Number,
  }
})

MutationSchema.set('toJSON', { // transformo la respuesta del JSON eliminando el _id de default y calculando el ratio
  transform: (doc, ret) => {
    ret.ratio = ret.count_mutations / ret.count_no_mutation
    delete ret._id
  }
})

export default mongoose.models.Mutation || mongoose.model('Mutation', MutationSchema)