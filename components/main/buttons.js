import Link from 'next/dist/client/link'
import styles from './buttons.module.css'

export default function Buttons(props) {
  return (
    <div className={styles.buttons}>
      <button>
        <Link href='/'>
          <div>
            <p>01</p>
            <h4>OVERVIEW</h4>
          </div>
        </Link>
      </button>
      <button>
        <Link href='/'>
          <div>
            <p>02</p>
            <h4>INTERNAL STRUCTURE</h4>
          </div>
        </Link>
      </button>
      <button>
        <Link href='/'>
          <div>
            <p>03</p>
            <h4>SURFACE GEOGRAPHY</h4>
          </div>
        </Link>
      </button>
    </div>
  )
}
