import "./happy-patients.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function HappyPatients() {
  return (
    <div className="hp">
      <div className="happy-patients-heading">
        <h5>Happy Patients</h5>
      </div>
      <div className="happy-patients">
        <Carousel>
          <div className="patient">
            <div className="patient-dis">
              <p>
                "I am so happy with the care I've received at this facility! The
                staff is wonderful and they really seem to care about their
                patients. They're always willing to answer any questions I have
                and they make sure I'm comfortable with everything before moving
                forward."
              </p>
              <h6>Health Care</h6>
            </div>
            <div className="patient-img">
              <hr style={{"width":"33%"}}></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-2.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-3.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-4.jpg" alt="" />
              <hr style={{"width":"33%"}}></hr>
            </div>
          </div>
          <div className="patient">
            <div className="patient-dis">
              <p>
                "I am so happy with the care I've received at this facility! The
                staff is wonderful and they really seem to care about their
                patients. They're always willing to answer any questions I have
                and they make sure I'm comfortable with everything before moving
                forward."
              </p>
              <h6>Health Care</h6>
            </div>
            <div className="patient-img">
              <hr style={{"width":"33%"}}></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr style={{"width":"33%"}}></hr>
            </div>
          </div>
          <div className="patient">
            <div className="patient-dis">
              <p>
                "I am so happy with the care I've received at this facility! The
                staff is wonderful and they really seem to care about their
                patients. They're always willing to answer any questions I have
                and they make sure I'm comfortable with everything before moving
                forward."
              </p>
              <h6>Health Care</h6>
            </div>
            <div className="patient-img">
              <hr style={{"width":"33%"}}></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr></hr>
              <img src="./images/d-1.jpg" alt="" />
              <hr style={{"width":"33%"}}></hr>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HappyPatients;
