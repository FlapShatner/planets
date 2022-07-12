import { Fragment } from 'react'

import MobileNav from './nav'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

export default function Surface({ planet }) {
  const imagePath = planet.images.planet.substring(1)
  const overlayPath = planet.images.geology.substring(1)

  return (
    <Fragment>
      <MobileNav page={'geography'} planet={planet} />
      <section>
        <div className='imageContainer'>
          <img className='image' src={imagePath} alt='image' />

          <img className='overlay' src={overlayPath} alt='image' />
        </div>
        <div className='content'>
          <h1>{planet.name.toUpperCase()}</h1>
          <div className='desc'>
            <p>{planet.geology.content}</p>
          </div>
          <span>Source:</span>
          <div className='link'>
            <a href={planet.geology.source}>Wikipedia</a>
            <div className='icon'>
              <FaExternalLinkSquareAlt />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .imageContainer {
          position: relative;
          width:100%
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 25% 0;
        }
        .content h1 {
          text-align: center;
          font-size: 40px;
          line-height: 1.5;
        }
        .content {
          text-align: center;
          padding-bottom: 10px;
        }
        .desc p {
          text-align: center;
          padding: 20px 30px;
        }
        .link {
          display: inline-flex;
          flex-direction: row;
          color: var(--color-white);
          opacity: 0.8;
          font-size: 12px;
        }

        a {
          font-size: 14px;
          color: var(--color-white);
          font-weight: 400;
        }

        .link .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 5px;
        }
        span {
          font-size: 14px;
          font-family: 'League Spartan', sans-serif;
          color: var(--color-gray-light);
          opacity: 0.8;
          margin-right: 10px;
        }
        .image{
          width:50%;          
        }
        .overlay {
          position: absolute;
          bottom: 30px;
          width:25%;
        }
      `}</style>
    </Fragment>
  )
}
