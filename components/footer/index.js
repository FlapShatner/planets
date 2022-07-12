import styles from './footer.module.css'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function Footer(props) {
  const { planet } = props

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Box title={'ROTATION TIME'} stat={planet.rotation} />
        <Box title={'REVOLUTION TIME'} stat={planet.revolution} />
        <Box title={'RADIUS'} stat={planet.radius} />
        <Box title={'AVERAGE TEMP'} stat={planet.temperature} />
      </div>
    </footer>
  )
}

function Box(props) {
  return (
    <div className={styles.box}>
      <p>{props.title}</p>
      <h2>{props.stat}</h2>
    </div>
  )
}
