import getData from '../../../json/staticdata'
import Header from '../../../components/header'
import Main from '../../../components/main'

export default function Planet(props) {
  const { planet } = props

  return (
    <main>
      <Header planet={planet} />
      <Main planet={planet} />
      <footer>
        <div>Stat Boxes</div>
      </footer>
    </main>
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
