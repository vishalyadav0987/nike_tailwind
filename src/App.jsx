import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import PopularProducts from './Components/PopularProducts/PopularProducts'
import SuperQuality from './Components/SuperQuality/SuperQuality'
import Services from './Components/Services/Services'
import SpecialOffer from './Components/SpecialOffer/SpecialOffer'
import CustomerReviews from './Components/CustomerReviews/CustomerReviews'
import Subscribes from './Components/Subscribes/Subscribes'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <main className="relative">
        <Navbar />
        <section className="xl:padding-l padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services/>
        </section>
        <section className="padding">
          <SpecialOffer/>
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribes/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
      </main>
    </>
  )
}

export default App
