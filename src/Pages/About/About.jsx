import Line from "../../components/Line/Line";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About"; 
  }, []);
  return (
    <>
      <Navbar />
      <section id="about">
        <div className="bg-main vh-100 d-flex flex-wrap flex-column justify-content-center align-items-center text-white">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            about component
          </h2>
          <Line />
          <div className="container">
            <div className="row px-5">
              <div className="col-md-6 ps-md-5">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 pe-5">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
