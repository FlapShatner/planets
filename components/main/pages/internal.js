import Image from 'next/image'
import styles from '../main.module.css'
import Buttons from '../buttons'
import Structure from './mobile/internal'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

export default function Internal(props) {
  const { planet } = props
  const name = planet.name.toUpperCase()
  const imagePath = planet.images.internal.substring(1)
  const isMobile = useMediaQuery('(max-width:600px)')

  if (isMobile) {
    return <Structure planet={planet} />
  } else {
    return (
      <section className={styles.planetData}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={imagePath} alt='image' />
        </div>
        <div className={styles.overview}>
          <div className={styles.aside}>
            <div className={styles.description}>
              <h1>{name}</h1>
              <p>{planet.structure.content}</p>
              <div>
                <span>Source:</span>
                <Link url={planet.structure.source} />
              </div>
            </div>
            <Buttons planet={planet} page={'internal'} />
          </div>
        </div>
      </section>
    )
  }

  function Link(props) {
    return (
      <div className={styles.link}>
        <a href={props.url}>Wikipedia</a>
        <div className={styles.icon}>
          <FaExternalLinkSquareAlt />
        </div>
      </div>
    )
  }
}
