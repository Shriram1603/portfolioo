import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";
// import Card1 from "../../components/card/Card1";

export default function Services() {
  return (
    <section className="p-5" >
      <div className="container" id="service">
        <div className="row text-center">
          <div className="col-md">
            <div className="card bg-light text-lighter child card_style">
              <div className="card-body text-center">
                <div className="h1">
                <i className="fa-solid fa-laptop"></i>
                </div>
                <h3 className="card-title mb-3">Web devolopment</h3>
                <p className="card-text bg-light">
                  Since we added icon fonts in v1.2.0, it’s been possible to use
                  a CDN to deliver and use Bootstrap Icons in seconds. Include
                  the stylesheet, place short HTML snippets where you want
                  icons, and you’re done! If you want to include it yourself,
                  here’s how.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
          <div className="card bg-light text-lighter  child card_style">
              <div className="card-body text-center">
                <div className="h1">
                <i className="fa-brands fa-facebook"></i>
                </div>
                <h3 className="card-title mb-3">Facebook ads</h3>
                <p className="card-text bg-light">
                  Since we added icon fonts in v1.2.0, it’s been possible to use
                  a CDN to deliver and use Bootstrap Icons in seconds. Include
                  the stylesheet, place short HTML snippets where you want
                  icons, and you’re done! If you want to include it yourself,
                  here’s how.
                </p>
              </div>
            </div>
            
          </div>
          <div className="col-md">
          <div className="card bg-light text-lighter child card_style">
              <div className="card-body text-center">
                <div className="h1">
                <i className="fa-regular fa-user"></i>
                </div>
                <h3 className="card-title mb-3">Client service</h3>
                <p className="card-text bg-light">
                  Since we added icon fonts in v1.2.0, it’s been possible to use
                  a CDN to deliver and use Bootstrap Icons in seconds. Include
                  the stylesheet, place short HTML snippets where you want
                  icons, and you’re done! If you want to include it yourself,
                  here’s how.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
