import Line from "../../components/Line/Line";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import avatar from "../../assets/home-images/avataaars.svg";
import { useEffect } from "react";

export default function Home() {
   useEffect(() => {
     document.title = "home";
   }, []);
  return (
    <>
      <Navbar />
      <header className="hero">
        <div className="bg-main vh-100 d-flex flex-wrap flex-column justify-content-center align-items-center text-white">
          <div className="avater">
            <img
              src={avatar}
              alt="avater "
              className="w-100"
            />
          </div>
          <div className="text-center">
            <h1 className="text-uppercase">Start Framework</h1>
            <Line />
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}
