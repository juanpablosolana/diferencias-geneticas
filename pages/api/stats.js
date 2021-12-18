import dbConnect from '../../lib/db';
import Mutation from '../../models/mutation';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(403).send()

  await dbConnect()
  try {
    const mutations = await Mutation.findOne({ _id: `${process.env.id}` })
    // recupero el documento con el id activo
    res.status(200).json(mutations)
  } catch (error) {
    res.status(400).json(error)
  }
}
