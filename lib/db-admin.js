import db from 'lib/firebase-admin'

export default async function getAllFeedBack(siteId){
  const snapshot = await db.collection('feedback').where('siteId', '==', siteId).get();
  const feedBacks = []
  snapshot.forEach(doc => {
    feedBacks.push({id: doc.id, ...doc.data()})
  })
  return feedBacks
}
