import Image from 'next/image'
import styles from './main.module.css'
import Buttons from './buttons'

export default function Main(props) {
  const { planet } = props
  const name = planet.name.toUpperCase()
  const imagePath = planet.images.planet.substring(1)

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
          <p>{planet.overview.content}</p>
          <div>
            <span>Source:</span>
            <a href={planet.overview.source}>Wikipedia</a>
          </div>
          <Buttons planet={planet} />
        </div>
      </div>
    </section>
  )
}
