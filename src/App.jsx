import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Ambiance from './components/sections/Ambiance'
import Pool from './components/sections/Pool'
import Menu from './components/sections/Menu'
import CTABand from './components/sections/CTABand'
import Gallery from './components/sections/Gallery'
import Info from './components/sections/Info'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ambiance />
        <Pool />
        <Menu />
        <CTABand />
        <Gallery />
        <Info />
      </main>
      <Footer />
    </>
  )
}
