import AboutUs from "@/components/AboutUs";
import ProductShowcase from "@/components/Bestshowcase";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/Product";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/video";
import WhyChooseUsBanner from "@/components/Whychooseus";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">

      <Navbar />
      <Hero/>
      <AboutUs/>

      <ProductSection/>
      <Video/>
      <ProductShowcase/>
      <WhyChooseUsBanner/>
      <Testimonials/>
      <FAQ/>
      <ContactUs/>
      <Footer/>

    </main>
  );
}
