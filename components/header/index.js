import Link from 'next/link'
import styles from './header.module.css'
import useMediaQuery from '../../hooks/useMediaQuery'
import Image from 'next/image'

function Logo() {
  return (
    <div className={styles.logo}>
      <h2>THE PLANETS</h2>
    </div>
  )
}

export default function Header(props) {
  const { planetData, planet } = props
  const names = []
  planetData.map((planet) => names.push(planet.name.toUpperCase()))
  const isMobile = useMediaQuery('(max-width: 600px)')

  if (isMobile) {
    return (
      <header>
        <div>
          <h2>THE PLANETS</h2>
        </div>
        <div className='img'>
          <Image onClick={props.onOpen} src={'/assets/icon-hamburger.svg'} alt='menu icon' width={25} height={20} />
        </div>
        <style jsx>{`
          header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid var(--color-gray-tran);
          }
          h2 {
            font-size: 30px;
            margin: 5px 0;
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 25px;
          }
          div.img {
            cursor: pointer;
          }
        `}</style>
      </header>
    )
  } else {
    return (
      <header className={styles.header}>
        <Logo />
        <nav>
          <ul>
            {names.map((planet) => (
              <li key={planet}>
                <Link href={`/planets/${planet.toLowerCase()}`}>
                  <a>{planet}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <style jsx>{`
          a:hover {
            border-top: 2px solid var(--color-${planet.name.toLowerCase()});
          }
        `}</style>
      </header>
    )
  }
}

// ${names.map(
//   (name) => `a.${name.toLowerCase()}:hover{
//   border-top: 2px solid var(--color-${name.toLowerCase()})
// }`
// )}
