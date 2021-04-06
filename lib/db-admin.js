import db from 'lib/firebase-admin'

export async function getAllFeedBack(siteId){
  const snapshot = await db.collection('feedback').where('siteId', '==', siteId).get();
  const feedBacks = []
  snapshot.forEach(doc => {
    feedBacks.push({id: doc.id, ...doc.data()})
  })
  return feedBacks
}
export async function getAllSites(siteId){
  const snapshot = await db.collection('site').get();
  const allSites = []
  snapshot.forEach(doc => {
    allSites.push({id: doc.id, ...doc.data()})
  })

  return allSites
}
