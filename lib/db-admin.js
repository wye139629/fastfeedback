import { parseISO } from 'date-fns';
import db from 'lib/firebase-admin'

export async function getAllFeedBack(siteId){
  try{
    const snapshot = await db.collection('feedback').where('siteId', '==', siteId).get();
    const feedbacks = []
    snapshot.forEach(doc => {
      feedbacks.push({id: doc.id, ...doc.data()})
    })

    feedbacks.sort((a, b)=>{
      return parseISO(b.createAt) - parseISO(a.createAt)
    })

    return { feedbacks }
  }catch(error){
    return { error }

  }


}

export async function getAllSites(siteId){
  try{
    const snapshot = await db.collection('site').get();
    const sites = []
    snapshot.forEach(doc => {
      sites.push({id: doc.id, ...doc.data()})
    })

    return { sites }
  }catch(error){
    return {error}
  }
}
