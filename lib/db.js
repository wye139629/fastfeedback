import firebase from './firebase'

const firestore = firebase.firestore()

export function createUser(uid, data){
  return firestore.collection('users').doc(uid).set({uid, ...data}, {merge: true})
}

export function createSite(siteData){
  return firestore.collection('site').add(siteData)
}

export function createFeedback(feedback){
  return firestore.collection('feedback').add(feedback)
}
