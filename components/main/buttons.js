import Link from 'next/dist/client/link'
import styles from './buttons.module.css'

export default function Buttons(props) {
  const { planet, page } = props
  const name = planet.name.toLowerCase()
  const color = `var(--color-${name})`
  const link = `/planets/${name}`

  return (
    <div className={styles.buttons}>
      <button className='overview'>
        <Link href={link}>
          <div>
            <p>01</p>
            <h4>OVERVIEW</h4>
          </div>
        </Link>
      </button>
      <button className='internal'>
        <Link href={`${link}?page=internal`}>
          <div>
            <p>02</p>
            <h4>INTERNAL STRUCTURE</h4>
          </div>
        </Link>
      </button>
      <button className='geology'>
        <Link href={`${link}?page=geology`}>
          <div>
            <p>03</p>
            <h4>SURFACE GEOGRAPHY</h4>
          </div>
        </Link>
      </button>
      <style jsx>{`
        button.${page} {
          background-color: ${color};
        }
        button:hover {
          background-color: var(--color-gray);
        }
        button.${page}:hover {
          background-color: ${color};
        }
      `}</style>
    </div>
  )
}
