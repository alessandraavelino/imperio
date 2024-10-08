import Header from "./header/Header";
import Inicio from "./home/Inicio";
import Services from "./services/Services";
import About from "./about/About";
import Plans from "./plans/Plans";
import Contact from "./contact/Contact";
import Cta from "./cta/Cta";
import Footer from "./footer/Footer";
//import Gallery from "./gallery/Gallery";
import CtaPet from "./ctaPe/CtaPet";
import FloatingWhatsAppButton from "./whatsapp/FloatingWhatsAppButton";

export default function Home() {
  return (
   <div>
    <Header />
    <Inicio />
    <Services />
    <CtaPet />
    <About />
    <Cta />
    {/* <Gallery /> */}
    <Contact />
    <Plans />
    <Footer />
    <FloatingWhatsAppButton />
   </div>
  );
}
