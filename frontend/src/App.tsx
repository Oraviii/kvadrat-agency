import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-dark)', color: 'white' }}>
      <Header />
      <Hero />
      <Services />
      <Cases />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
