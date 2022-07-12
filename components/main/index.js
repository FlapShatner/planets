import Image from 'next/image'
import styles from './main.module.css'
import Buttons from './buttons'
import Overview from './pages/mobile/overview'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function Main(props) {
  const { planet } = props
  const name = planet.name.toUpperCase()
  const imagePath = planet.images.planet.substring(1)
  const isMobile = useMediaQuery('(max-width:600px)')

  if (isMobile) {
    return <Overview planet={planet} />
  }

  return (
    <section className={styles.planetData}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imagePath} alt='image' />
      </div>
      <div className={styles.overview}>
        <div className={styles.aside}>
          <div className={styles.description}>
            <h1>{name}</h1>
            <p>{planet.overview.content}</p>
            <div>
              <span>Source:</span>
              <Link url={planet.overview.source} />
            </div>
          </div>
          <Buttons planet={planet} page={'overview'} />
        </div>
      </div>
    </section>
  )
}

export function Link(props) {
  return (
    <div className={styles.link}>
      <a href={props.url}>Wikipedia</a>
      <div className={styles.icon}>
        <FaExternalLinkSquareAlt />
      </div>
    </div>
  )
}
