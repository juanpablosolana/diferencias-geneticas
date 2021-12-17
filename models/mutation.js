import mongoose from 'mongoose'

const MutationSchema = new mongoose.Schema({
  count_mutations: {
    type: Number,
  },
  count_no_mutation: {
    type: Number,
  }
})

export default mongoose.models.Mutation || mongoose.model('Mutation', MutationSchema)