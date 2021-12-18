
import Mutation from '../models/mutation';
const mutationUpdate = async () => {
  const update = await Mutation.findOneAndUpdate({ _id: `${process.env.id}` })
  update.count_mutations += 1
 return  update.save()
}
const noMutationsUpdate = async () => {
  const update = await Mutation.findOneAndUpdate({ _id: `${process.env.id}` })
  update.count_no_mutation += 1
  return update.save()
}
export { mutationUpdate, noMutationsUpdate }