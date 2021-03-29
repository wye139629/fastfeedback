import Head from 'next/head'
import styles from '../styles/Home.module.css'
import firebase from '../lib/firebase'
import { auth } from 'firebase'
import { useAuth } from '../lib/auth'

export default function Home() {
  const auth = useAuth()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
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
      </main>
    </div>
  )
}
