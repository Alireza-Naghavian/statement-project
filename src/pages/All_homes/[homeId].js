import SingelHome from '@/components/pages/singleHomeDetail/SingelHome'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import RealTor from '@/components/ui/RealTor'
import SideBar from '@/components/ui/SideBar'
import React from 'react'

function SingleHome() {
  return (
    <div className="container">
      <SideBar />
      <Header />
      <RealTor />
      <SingelHome/>
      <Footer />
    </div>
  )
}

export default SingleHome