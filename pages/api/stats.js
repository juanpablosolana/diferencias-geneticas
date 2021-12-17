import dbConnect from '../../lib/db';
import Mutation from '../../models/mutation';
// console.log(dbConnect)

export default function handler(req, res) {
  const { method } = req

   dbConnect()

  switch (method) {
    case 'GET':
      try {
          const mutations =  Mutation.find({})
          res.status(200).json({ success: true, data: mutations })
        } catch (error) {
          res.status(400).json({ error: error })
        }
      break
    case 'POST':
      try {
        const mutation =  Mutation.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: mutation })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
