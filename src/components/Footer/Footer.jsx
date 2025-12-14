export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-blue text-white p-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3>AROUND THE WEB</h3>
                <div className="icons d-flex flex-wrap justify-content-center">
                  <div className="icon mx-1">
                    <i className="fa-brands fa-facebook "></i>
                  </div>
                  <div className="icon mx-1">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="icon mx-1">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="icon mx-1">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-paragraph bg-dark-blue text-white text-center py-3">
          <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
