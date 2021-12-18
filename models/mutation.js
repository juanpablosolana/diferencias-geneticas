import mongoose from 'mongoose'

const MutationSchema = new mongoose.Schema({
  count_mutations: {
    type: Number,
  },
  count_no_mutation: {
    type: Number,
  }
})

MutationSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.ratio = ret.count_mutations / ret.count_no_mutation
    delete ret._id
  }
})


export default mongoose.models.Mutation || mongoose.model('Mutation', MutationSchema)