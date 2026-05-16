import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from"@/components/Programs";
import Testimonials from"@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from"@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}