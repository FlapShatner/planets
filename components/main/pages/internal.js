import Image from 'next/image'
import styles from '../main.module.css'
import Buttons from '../buttons'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

export default function Internal(props) {
  const { planet } = props
  const name = planet.name.toUpperCase()
  const imagePath = planet.images.internal.substring(1)

  return (
    <section className={styles.planetData}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image src={imagePath} alt='image' width={290} height={290} />
        </div>
      </div>
      <div className={styles.overview}>
        <div className={styles.description}>
          <h1>{name}</h1>
          <p>{planet.structure.content}</p>
          <div>
            <span>Source:</span>
            <Link url={planet.structure.source} />
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
