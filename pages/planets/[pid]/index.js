import getData from '../../../json/staticdata'
import Main from '../../../components/main'
import Internal from '../../../components/main/pages/internal'
import Geology from '../../../components/main/pages/geology'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
export default function Planet(props) {
  const router = useRouter()
  const page = router.query.page
  const { planet } = props

  return (
    <Layout planet={planet}>
      {page === 'internal' && <Internal planet={planet} />}
      {page === 'geology' && <Geology planet={planet} />}
      {!page && <Main planet={planet} />}
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const { pid } = ctx.params
  const capPid = pid.charAt(0).toUpperCase() + pid.slice(1).toLowerCase()
  const planetData = await getData()
  const planet = planetData.find((planet) => planet.name === capPid)
  return {
    props: {
      planet,
    },
  }
}

export async function getStaticPaths() {
  const planetData = await getData()
  const paths = planetData.map((planet) => ({
    params: { pid: planet.name },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}
