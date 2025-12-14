import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import port1 from "../../assets/portfolio-images/poert1.png";
import port2 from "../../assets/portfolio-images/port2.png";
import port3 from "../../assets/portfolio-images/port3.png";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    document.title = "portfolio";
  }, []);
  return (
    <>
      <Navbar />
      <section
        id="portfolio"
        className="vh-100 d-flex flex-wrap flex-column justify-content-center align-items-center"
      >
        <div className="container">
          <SectionHeader data={"portfolio component"} />
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-image rounded-3 overflow-hidden position-relative">
                <img
                  alt="portfolio image"
                  className="w-100 rounded-3"
                  src={port1}
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-image rounded-3 overflow-hidden position-relative">
                <img
                  alt="portfolio image"
                  className="w-100 rounded-3"
                  src={port2}
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-image rounded-3 overflow-hidden position-relative">
                <img
                  alt="portfolio image"
                  className="w-100 rounded-3"
                  src={port3}
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-image rounded-3 overflow-hidden position-relative">
                <img
                  alt="portfolio image"
                  className="w-100 rounded-3"
                  src={port1}
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-image rounded-3 overflow-hidden position-relative">
                <img
                  alt="portfolio image"
                  className="w-100 rounded-3"
                  src={port2}
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-image rounded-3 overflow-hidden position-relative">
                <img
                  alt="portfolio image"
                  className="w-100 rounded-3"
                  src={port3}
                />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
