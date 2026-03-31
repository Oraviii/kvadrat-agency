import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const shapes = [
  { w: 90,  h: 90,  top: '6%',  left: '5%',   filled: false, anim: 'float1 7s ease-in-out infinite',  op: 0.09 },
  { w: 130, h: 65,  top: '12%', right: '7%',   filled: true,  anim: 'float2 5s ease-in-out infinite',  op: 0.10 },
  { w: 55,  h: 55,  top: '30%', left: '3%',    filled: false, anim: 'float3 6s ease-in-out infinite',  op: 0.08 },
  { w: 95,  h: 95,  top: '28%', right: '10%',  filled: true,  anim: 'float4 4.5s ease-in-out infinite',op: 0.09 },
  { w: 160, h: 40,  top: '50%', left: '8%',    filled: false, anim: 'float5 8s ease-in-out infinite',  op: 0.06 },
  { w: 42,  h: 42,  top: '18%', left: '42%',   filled: true,  anim: 'float6 5.5s ease-in-out infinite',op: 0.07 },
  { w: 110, h: 50,  top: '65%', right: '5%',   filled: false, anim: 'float1 6s ease-in-out infinite',  op: 0.08 },
  { w: 75,  h: 115, top: '72%', left: '2%',    filled: true,  anim: 'float2 7s ease-in-out infinite',  op: 0.08 },
  { w: 38,  h: 38,  top: '8%',  right: '30%',  filled: false, anim: 'float3 4s ease-in-out infinite',  op: 0.07 },
  { w: 68,  h: 68,  top: '55%', left: '48%',   filled: false, anim: 'float4 7.5s ease-in-out infinite',op: 0.06 },
  { w: 58,  h: 28,  top: '40%', left: '22%',   filled: true,  anim: 'float5 5s ease-in-out infinite',  op: 0.07 },
  { w: 120, h: 120, top: '82%', right: '12%',  filled: false, anim: 'float6 9s ease-in-out infinite',  op: 0.07 },
]

export default function App() {
  return (
    <>
      {/* Fixed animated gradient background — always visible */}
      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, zIndex: 0,
          background: 'linear-gradient(135deg, #0a0f2d 0%, #20276f 45%, #05e3ec 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 25s ease-in-out infinite',
        }}
      />

      {/* Fixed floating shapes layer */}
      <div aria-hidden style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {shapes.map((s, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: s.w, height: s.h,
              top: s.top,
              ...(s.left  ? { left:  s.left  } : {}),
              ...(s.right ? { right: s.right } : {}),
              borderRadius: 8,
              opacity: s.op,
              animation: s.anim,
              ...(s.filled
                ? { backgroundColor: 'var(--color-primary)' }
                : { border: '1px solid var(--color-accent)' }),
            }}
          />
        ))}
      </div>

      {/* Scrollable page content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Hero />
        <Services />
        <Cases />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
