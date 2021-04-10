import { getAllFeedBack } from 'lib/db-admin'

export default async (req, res) => {
  const siteId = req.query.siteId
  const { feedbacks, error } = await getAllFeedBack(siteId)
  if(error){
    res.status(500).json({ error })
  }
  res.status(200).json({feedbacks})
}
