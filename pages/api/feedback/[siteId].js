import getAllFeedBack from 'lib/db-admin'
import db from 'lib/firebase-admin'

export default async (req, res) => {
  const siteId = req.query.siteId
  const feedbacks = await getAllFeedBack(siteId)
  res.status(200).json({feedbacks})
}
