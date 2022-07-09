import Link from 'next/link'
import styles from './header.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
      <h2>THE PLANETS</h2>
    </div>
  )
}

export default function Header() {
  const planetNames = ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE']

  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul>
          {planetNames.map((planet) => (
            <li key={planet}>
              <Link href={`/planets/${planet.toLowerCase()}`}>
                <a>{planet}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
