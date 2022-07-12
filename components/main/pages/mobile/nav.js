import Link from 'next/link'

export default function MobileNav({ planet, page }) {
  const planetName = planet.name.toLowerCase()
  const path = `/planets/${planetName}`

  return (
    <section className='planetData'>
      <div className='tabs'>
        <div className='tab overview'>
          <Link href={path}>
            <h4>OVERVIEW</h4>
          </Link>
        </div>
        <div className='tab internal'>
          <Link href={`${path}?page=internal`}>
            <h4>STRUCTURE</h4>
          </Link>
        </div>
        <div className='tab geography'>
          <Link href={`${path}?page=geography`}>
            <h4>SURFACE</h4>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .tabs {
          display: flex;
          flex-direction: row;
          justify-content: space-around;

          border-bottom: 1px solid var(--color-gray);
        }
        .tab {
          padding: 15px 0 12px;
          cursor: pointer;
        }
        .${page} {
          border-bottom: 2px solid var(--color-${planetName});
        }
        h4 {
          font-size: 12px;
          font-weight: 400;
        }
      `}</style>
    </section>
  )
}
