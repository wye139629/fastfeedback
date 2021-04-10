import { getAllSites, getAllFeedBack } from 'lib/db-admin'
import Feedback from 'components/Feedback'
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { useAuth } from 'lib/auth'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
import { createFeedback } from 'lib/db'

export async function getStaticProps(context) {
  const siteId = context.params.siteId
  const { feedbacks } = await getAllFeedBack(siteId)
  return {
    props: {
      initialFeedback: feedbacks
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const { sites } = await getAllSites()
  const paths = sites.map(site => ({
      params: {
        siteId: site.id
      }
    }))

  return {
    paths,
    fallback: false // See the "fallback" section below
  };
}


const SiteFeedback = ({ initialFeedback })=>{
  const [feedbacks, setFeedbacks] = useState(initialFeedback)
  const auth = useAuth()
  const router = useRouter()
  const inputEl = useRef(null)

  const onSubmit = (e) =>{
    e.preventDefault()
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'pending'
    }
    setFeedbacks([newFeedback, ...feedbacks])
    createFeedback(newFeedback)
  }
  return(
    <>
    <Box display='flex' flexDirection='column' width='full' maxWidth='768px' margin='0 auto'>
      <Box as='form' onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor='comment'>Comment</FormLabel>
          <Input ref={inputEl} type='comment' id='comment'/>
          <Button mt={2} type='submit' fontWeight='medium'>Add Comment</Button>
        </FormControl>
      </Box>
      {feedbacks.map(feedback => (<Feedback key={feedback.id} {...feedback}/>))}
    </Box>
    </>
  )
}

export default SiteFeedback
