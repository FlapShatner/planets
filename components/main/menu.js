import Image from 'next/image'
import Link from 'next/link'

export default function Menu({ planetData, onOpen }) {
  const names = []
  planetData.map((planet) => names.push(planet.name.toUpperCase()))

  return (
    <div className='container'>
      <ul className='item'>
        {names.map((planet) => (
          <MenuItem key={planet} onOpen={onOpen} planet={planet} />
        ))}
      </ul>

      <style jsx>{`
        .container {
          height: 500px;
        }
        .item {
          width: 100%;
          height: 500px;
          padding: 30px;
        }
      `}</style>
    </div>
  )
}

export function MenuItem(props) {
  return (
    <Link href={`/planets/${props.planet.toLowerCase()}`}>
      <li onClick={props.onOpen}>
        <>
          <div className='title'>
            <div className='bulletBox'>
              <div className='bullet' />
            </div>
            <h3>{props.planet}</h3>
          </div>
          <div className='image'>
            <Image src={'/assets/icon-chevron.svg'} alt='chevron' width={10} height={10} />
          </div>
        </>

        <style jsx>{`
          li {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            border-bottom: 1px solid var(--color-gray-tran);
          }
          li:last-child {
            border: none;
          }
          .bulletBox {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .bullet {
            position: relative;
            width: 15px;
            height: 15px;
            bottom: 2px;
            border-radius: 50%;
            background-color: var(--color-${props.planet.toLowerCase()});
          }
          .title {
            display: flex;
            flex-direction: row;
          }
          h3 {
            font-size: 17px;
            font-weight: 300;
            padding: 15px 20px;
          }
          .image {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </li>
    </Link>
  )
}
