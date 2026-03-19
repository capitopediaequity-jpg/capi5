import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <WhatsAppButton />
      <Hero />

      <div className="relative z-10">
        <Services />
        <About />
        <Stats />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
