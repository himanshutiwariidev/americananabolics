import AboutUs from "@/components/AboutUs";
import ProductShowcase from "@/components/Bestshowcase";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductComparisonTable from "@/components/ProductComparisonTable";
import ProductSection from "@/components/Product";
import ProductsIntro from "@/components/ProductsIntro";
import Video from "@/components/video";
import WhyChooseUsBanner from "@/components/Whychooseus";
import WhyExplore from "@/components/WhyExplore";

export const metadata = {
  title: "Anabolic Steroid Products & Testosterone Compounds | AmericanAbolics",
  description:
    "Explore anabolic steroid products from AmericanAbolics, including Testosterone Enanthate, Testosterone Cypionate, Trenbolone, Nandrolone and Boldenone compounds.",
  keywords: [
    "Anabolic Steroid Products",
    "Bodybuilding Products Online",
    "Testosterone products",
    "Testosterone Enanthate",
    "Testosterone Cypionate",
    "Trenbolone Enanthate",
    "Nandrolone Decanoate",
    "Nandrolone Phenylpropionate",
    "Boldenone Undecylenate",
    "injectable anabolic steroids",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <ProductsIntro />
      <AboutUs />
      <ProductSection />
      <ProductComparisonTable />
      <Video />
      <ProductShowcase />
      <WhyChooseUsBanner />
      <WhyExplore />
      <FAQ />
      <ContactUs />
      <Footer />
    </main>
  );
}
