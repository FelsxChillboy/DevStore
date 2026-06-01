import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import ProductSection from '@/components/home/ProductSection'
import UMKMSection from '@/components/home/UMKMSection'
import NewProductsSection from '@/components/home/NewProductsSection'
import HowToOrder from '@/components/home/HowToOrder'
import About from '@/components/home/About'
import AnimatedSection from '@/components/ui/AnimatedSection'
import OrderModal from '@/components/ui/OrderModal'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="produk">
          <AnimatedSection animation="fade-up">
            <ProductSection />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <UMKMSection />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <NewProductsSection />
          </AnimatedSection>
        </div>
        <AnimatedSection animation="fade-up" delay={100}>
          <HowToOrder />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={200}>
          <About />
        </AnimatedSection>
      </main>
      <Footer />
      <OrderModal />
      <WhatsAppFloat />
    </>
  )
}
