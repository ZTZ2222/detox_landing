import AboutUs from "@/components/sections/about-us"
import CTA from "@/components/sections/cta"
import FAQ from "@/components/sections/faq"
import Hero from "@/components/sections/hero"
import OurProducts from "@/components/sections/our-products"
import ProductDetails from "@/components/sections/product-details"
import ProductFeatures from "@/components/sections/product-features"
import ProductsShowcase from "@/components/sections/products-showcase"
import ThreeSteps from "@/components/sections/three-steps"
import WhyUs from "@/components/sections/why-us"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyUs />
      <ProductsShowcase />
      <OurProducts />
      <ProductDetails />
      <ProductFeatures />
      <ThreeSteps />
      <FAQ />
      <CTA />
    </>
  )
}
