import { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import Menu from './main/menu'
import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

export default function Layout(props) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery('(max-content:600px)')

  function onOpen() {
    setIsOpen((current) => !current)
  }
  return (
    <Fragment>
      <Header onOpen={onOpen} planetData={props.planetData} planet={props.planet} />
      {isOpen && <Menu onOpen={onOpen} planetData={props.planetData} />}
      {!isOpen && <main>{props.children}</main>}
      {!isOpen && <Footer planet={props.planet} />}
    </Fragment>
  )
}
