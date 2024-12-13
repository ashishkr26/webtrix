import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import Faq from "./Faq"
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Header/>
      <MainContainer/>
      <Services/>
      <Faq/>
    </div>
  )
}

export default Home
