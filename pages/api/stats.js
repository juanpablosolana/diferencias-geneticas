import dbConnect from '../../lib/db';
import Mutation from '../../models/mutation';
// console.log(dbConnect)

export default async function handler(req, res) {
  const { method } = req

   await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const mutations = await Mutation.findOne({ _id: '61bcf4515da94c232171fbfc'})
          // console.log(mutations)
        res.status(200).json(mutations)
        } catch (error) {
          res.status(400).json(error)
        }
      break
    // case 'POST':
    //   try {
    //     const mutation =  Mutation.create(
    //       req.body
    //     ) /* create a new model in the database */
    //     res.status(201).json({ success: true, data: mutation })
    //   } catch (error) {
    //     res.status(400).json({ success: false })
    //   }
    //   break
    default:
      res.status(400).json({ success: false })
      break
  }
}
