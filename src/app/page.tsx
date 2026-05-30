import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import ProductSection from '@/components/home/ProductSection'
import UMKMSection from '@/components/home/UMKMSection'
import NewProductsSection from '@/components/home/NewProductsSection'
import HowToOrder from '@/components/home/HowToOrder'
import About from '@/components/home/About'
import OrderModal from '@/components/ui/OrderModal'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <UMKMSection />
        <NewProductsSection />
        <HowToOrder />
        <About />
      </main>
      <Footer />
      <OrderModal />
      <WhatsAppFloat />
    </>
  )
}
