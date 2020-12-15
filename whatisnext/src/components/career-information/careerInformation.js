import { React, Component } from "react";
import "./careerInform.css";
import first from "../../assets/careerinformation/first.jpg";
import second from "../../assets/careerinformation/second.jpg";
import third from "../../assets/careerinformation/third.jpg";
import four from "../../assets/careerinformation/four.jpg";
import five from "../../assets/careerinformation/five.jpg";

class CareerInformation extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row career-body ">
            <div className="career-title ">
              <h1>Software Engineering</h1>
            </div>
            <div className="career-discrip">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the mastbecause
                occasionally circumstances occur in which toil and pain with a
                man who chooses to enjoy a pleaongs to those whothose in was
                born and I will give you a complete account of the system, and
                expound the actual teachith a man description occur in which
                part
              </p>
            </div>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="container">
          <div className="row" style={{ width: "100%" }}>
            <div className="career-title">
              <h1>Software Engineering Trakes</h1>
            </div>
            <div className="slider">
              <div className="sliderimgs">
                <div
                  id="carouselExample"
                  className="carousel slide"
                  data-ride="carousel"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" style={{ height: "100%" }}>
                    <div className="carousel-item active" data-interval="10000">
                      <img src={third} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                      <img src={first} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={second} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={four}
                        className="d-block w-100"
                        style={{ height: "600px" }}
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={five}
                        className="d-block w-100"
                        style={{ height: "600px" }}
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExample"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExample"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="sliderwordes ">
                <div className="mt-5">
                  <h5>Web Development</h5>
                  <h3>Frontend Development</h3>
                  <h5 className="free">Native/Framework</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore dolor
                    sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore magna aliquyam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row text-center comimgs" style={{ width: "100%" }}>
            <h1>Companies</h1>
            <div className="all">
              <div className="company text-center d-flex  justify-content-between mt-3 mb-5">
                <div>
                  <img src={first} alt="compant" />
                </div>
                <div>
                  {" "}
                  <img src={second} alt="compant" />
                </div>
                <div>
                  {" "}
                  <img src={third} alt="compant" />
                </div>
                <div>
                  {" "}
                  <img src={four} alt="compant" />
                </div>
                <div>
                  {" "}
                  <img src={five} alt="compant" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CareerInformation;
