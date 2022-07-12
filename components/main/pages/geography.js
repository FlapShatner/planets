import Image from 'next/image'
import styles from '../main.module.css'
import Buttons from '../buttons'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import useMediaQuery from '../../../hooks/useMediaQuery'
import Surface from './mobile/geography'

export default function Geography(props) {
  const { planet } = props
  const name = planet.name.toUpperCase()
  const imagePath = planet.images.planet.substring(1)
  const overlay = planet.images.geology.substring(1)
  const isMobile = useMediaQuery('(max-width:600px)')

  if (isMobile) {
    return <Surface planet={planet} />
  } else {
    return (
      <section className={styles.planetData}>
        <div className={styles.imageContainer}>
          <div id='planet' className={styles.image}>
            <Image src={imagePath} alt='image' width={290} height={290} />
          </div>
          <div className={styles.overlay}>
            <Image src={overlay} alt='image' width={163} height={199} />
          </div>
        </div>
        <div className={styles.overview}>
          <div className={styles.description}>
            <h1>{name}</h1>
            <p>{planet.geology.content}</p>
            <div>
              <span>Source:</span>
              <Link url={planet.geology.source} />
            </div>
          </div>
          <Buttons planet={planet} page={'geology'} />
        </div>
        <style jsx>{`
          #planet {
            width: 260px;
          }
        `}</style>
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
