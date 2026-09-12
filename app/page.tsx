import AppointmentCTA from "@/components/AppointmentCTA";
import Contact from "@/components/Contact";
import DoctorProfile from "@/components/DoctorProfile";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import PatientJourney from "@/components/PatientJourney";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Introduction />
        <Services />
        <DoctorProfile />
        <PatientJourney />
        <Testimonials />
        <FAQ />
        <AppointmentCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}