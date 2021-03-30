import Head from 'next/head'
import firebase from 'lib/firebase'
import { auth } from 'firebase'
import { useAuth } from 'lib/auth'
import { Button, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth()

  return (
    <div>
      <Head>
        <title>Fast feed back</title>
      </Head>

      <Heading fontWeight='400'>
        Fast feedback
      </Heading>
      <Text>
        current user: {auth.user ? auth.user.email : ''}
      </Text>
      {
        auth.user ?
        <div>
          <Button colorScheme="teal" variant="solid" onClick={(e) => auth.signout()}>Signout</Button>
        </div>
        :
        <div>
          <Button colorScheme="teal" variant="outline" onClick={(e)=> auth.gitHubSignin()}>Signin</Button>
        </div>
      }
    </div>
  )
}
