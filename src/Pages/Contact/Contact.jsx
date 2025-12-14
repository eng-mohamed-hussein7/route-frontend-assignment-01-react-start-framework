import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "contact";
  }, []);
  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="vh-100 d-flex flex-wrap flex-column justify-content-center align-items-center py-5"
      >
        <div className="container">
          <SectionHeader data={"contact section"} />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
