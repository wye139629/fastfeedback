import Head from 'next/head'
import firebase from '../lib/firebase'
import { auth } from 'firebase'
import { useAuth } from '../lib/auth'

export default function Home() {
  const auth = useAuth()

  return (
    <div>
        <h1>
          fast feedback
        </h1>
        <p>
          current user: {auth.user ? auth.user.email : ''}
        </p>
        {
          auth.user ?
          <div>
            <button onClick={(e) => auth.signout()}>logout</button>
          </div>
          :
          <div>
            <button onClick={(e)=> auth.gitHubSignin()}>login</button>
          </div>
        }
    </div>
  )
}
