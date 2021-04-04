import Head from 'next/head'
import firebase from 'lib/firebase'
import { auth } from 'firebase'
import { useAuth } from 'lib/auth'
import { Button, Heading, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  const auth = useAuth()
  console.log(process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY.replace(/\\n/g,'\n'))

  return (
    <div>
      <Head>
        <title>Fast feed back</title>
      </Head>

      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <Image src='/img/logo.png' width='50px' height='50px'/>
        {
          auth.user ?
          <div>
            <Button mt={4} as="a" href="/dashboard">
              View Dashboard
            </Button>
          </div>
          :
          <div>
            <Button mt={4} colorScheme="teal" variant="outline" onClick={(e)=> auth.gitHubSignin()}>Signin</Button>
          </div>
        }
      </Flex>
    </div>
  )
}
