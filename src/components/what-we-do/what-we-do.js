import { useState } from "react";
import "./what-we-do.css";
function WhatWeDo() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="what-we-do">
      <div className="what-we-do-title">
        <h5>What we do</h5>
      </div>
      <div className="containerr">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            SERVICES #1
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            SERVICES #2
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
           SERVICES #3
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="services-content">
              <div className="service-image">
                <img src="./images/what-we-do.jpg" alt="" />
              </div>
              <div className="service-description">
                <div>
                  <h6>what we do 1</h6>
                  <p>what we do what we do what we do what we do</p>
                  <p>what we do what we do what we do</p>
                </div>
                <div className="service-button">
                  <button className="button">Read More</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="services-content">
              <div className="service-image">
                <img src="./images/what-we-do.jpg" alt="" />
              </div>
              <div className="service-description">
                <div>
                <h6>what we do 2</h6>
                  <p>what we do what we do what we do what we do</p>
                  <p>what we do what we do what we do</p>
                </div>
                <div className="service-button">
                  <button className="button">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="services-content">
              <div className="service-image">
                <img src="./images/what-we-do.jpg" alt="" />
              </div>
              <div className="service-description">
                <div>
                <h6>what we do 3</h6>
                  <p>what we do what we do what we do what we do</p>
                  <p>what we do what we do what we do</p>
                </div>
                <div className="service-button">
                  <button className="button">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="services">
        <div><button className="button">SERVICES #1</button></div>
        <div><button className="button">SERVICES #1</button></div>
        <div><button className="button">SERVICES #1</button></div>
        </div>
        <div className="services-content">
            <div className="service-image">
                <img src="./images/what-we-do.jpg" alt=""/>
            </div>
            <div className="service-description">
            <div>
            <h6>sheershika</h6>
                <p>sheershika is the girl.she is doing job in concentrix</p>
                <p>sheershika is the girl</p>
            </div>  
            <div className="service-button">
            <button className="button">Read More</button>
            </div> 
            </div>  
        </div> */}
      </div>
    </div>
  );
}

export default WhatWeDo;
