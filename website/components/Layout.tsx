import React, {ReactNode} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props{
  children? : ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout