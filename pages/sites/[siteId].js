import { getAllSites, getAllFeedBack } from 'lib/db-admin'
import Feedback from 'components/Feedback'

export async function getStaticProps(context) {
  const siteId = context.params.siteId
  const allFeedbacks = await getAllFeedBack(siteId)
  return {
    props: {
      initialFeedback: allFeedbacks
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const allSites = await getAllSites()
  const paths = allSites.map(site => ({
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
  return(
    initialFeedback.map(feedback => {
      return(
        <Feedback key={feedback.id} {...feedback}/>
      )
    })
  )
}

export default SiteFeedback
