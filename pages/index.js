import Head from 'next/head'
import styles from '../styles/Home.module.css'
import firebase from '../lib/firebase'
import { auth } from 'firebase'
import { useAuth } from '../lib/auth'

export default function Home() {
  const auth = useAuth()
  const login = () =>{
    auth.gitHubSignin()
  }
  const logout = () =>{
    auth.signout()
  }
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
        <div>
          <button onClick={login}>login</button>
        </div>
        <div>{auth?.user?.email}</div>
        <div>
          <button onClick={logout}>logout</button>
        </div>
      </main>
    </div>
  )
}
