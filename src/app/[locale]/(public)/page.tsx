import AboutUs from "@/components/sections/about-us"
import Hero from "@/components/sections/hero"
import OurProducts from "@/components/sections/our-products"
import ProductDetails from "@/components/sections/product-details"
import ProductsShowcase from "@/components/sections/products-showcase"
import WhyUs from "@/components/sections/why-us"

export default function Home() {
  return (
    <main className="bg-background-primary">
      <Hero />
      <AboutUs />
      <WhyUs />
      <ProductsShowcase />
      <OurProducts />
      <ProductDetails />
      {/* <ProductFeatures /> */}
      {/* <ThreeSteps /> */}
      {/* <FAQ /> */}
      {/* <CTA /> */}
    </main>
  )
}
