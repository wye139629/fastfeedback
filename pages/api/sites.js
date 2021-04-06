// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllSites } from 'lib/db-admin'

export default async (_req, res) =>{
  const allSites = await getAllSites()

  res.status(200).json(allSites)
}
