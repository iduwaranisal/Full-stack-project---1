import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Title title='What is our Customers Say' subTitle='Are You Interest?'/>
      <Testimonial/>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
