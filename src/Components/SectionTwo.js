import React from "react";
import "../Styles/style.css";

function SectionTwo() {
  return (
    <div className="SectionTwo">
      <div className="container">
        <h1>Completed Sales</h1>

        <div className="content">
          <div className="contain">
            <div className="header">
              <img
                src="https://launchpad-bucket.s3.amazonaws.com/Icon+(36).svg"
                alt="logo"
              />
              <h3>Eesee</h3>
            </div>

            <div className="table">
              <ul>
                <li>ATH ROI</li>
                <li>Ticker</li>
                <li>Total Raise</li>
                <li>Sale Type</li>
              </ul>

              <ul style={{textAlign: "right"}}>
                <li>4.7x</li>
                <li>BRCT</li>
                <li>$500,000</li>
                <li>Ape Launch</li>
              </ul>
            </div>

            <button>Details</button>

            <div className="icons">
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-paper-plane"></i>
              <i class="fa-brands fa-discord"></i>
            </div>
          </div>

          <div className="contain">
            <div className="header">
              <img
                src="https://launchpad-bucket.s3.amazonaws.com/Icon+(31).svg"
                alt="logo"
              />
              <h3>StarHeroes</h3>
            </div>

            <div className="table">
              <ul>
                <li>ATH ROI</li>
                <li>Ticker</li>
                <li>Total Raise</li>
                <li>Sale Type</li>
              </ul>

              <ul style={{textAlign: "right"}}>
                <li>18.7x</li>
                <li>BRCT</li>
                <li>$2  00,000</li>
                <li>Ape Launch</li>
              </ul>
            </div>

            <button>Details</button>

            <div className="icons">
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-paper-plane"></i>
              <i class="fa-brands fa-discord"></i>
            </div>
          </div>

          <div className="contain">
            <div className="header">
              <img
                src="https://launchpad-bucket.s3.amazonaws.com/Icon+(38).svg"
                alt="logo"
              />
              <h3>SatoshiSync</h3>
            </div>

            <div className="table">
              <ul>
                <li>ATH ROI</li>
                <li>Ticker</li>
                <li>Total Raise</li>
                <li>Sale Type</li>
              </ul>

              <ul style={{textAlign: "right"}}>
                <li>33x</li>
                <li>BRCT</li>
                <li>$250,000</li>
                <li>Ape Launch</li>
              </ul>
            </div>

            <button>Details</button>

            <div className="icons">
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-paper-plane"></i>
              <i class="fa-brands fa-discord"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
