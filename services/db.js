import mongoose from 'mongoose';
// import Mutation from '../models/mutation'

mongoose.connect(process.env.DB)
  .then(() => console.log('connected to db'))
  .catch(err => console.error(err))

// const mutation = new Mutation({
//   count_mutations: 100,
//   count_no_mutation: 0
// })
// mutation.save()
//   .then(() => console.log('saved'))
//   .catch(err => console.error(err))
