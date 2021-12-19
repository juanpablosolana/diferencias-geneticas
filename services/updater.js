import dbConnect from '../lib/db';
import Mutation from '../models/mutation';

const mutationUpdate = async (option) => {
  await dbConnect() //la conexión queda en cache y no abre una nueva por cada petición
  const update = await Mutation.findOneAndUpdate({ _id: `${process.env.id}` }) //busco el documento pro su ID
  option === 'mutationUpdate' ? update.count_mutations += 1 : update.count_no_mutation += 1 //recupero el valor actual +1
  return update.save()
}

export default mutationUpdate