import React from "react";
import "../Styles/style.css";

function SectionOne() {
  return (
    <div className="SectionOne">
      <div className="featuredLaunch">
        <h1>Featured Launch</h1>
      </div>
      <div className="container">
        <div className="inner">
          <div className="left">
            <div
              className="heading"
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <img
                src="https://launchpad-bucket.s3.amazonaws.com/Icon+(45).svg"
                alt="logo"
              />
              <h3>Nuklai</h3>
            </div>
            <div className="icons">
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-paper-plane"></i>
              <i class="fa-brands fa-discord"></i>
            </div>
            <h3>Power the Next Wave of AI with World-Class Data</h3>
            <h4>
              Total Raise: <span>$360,000</span>
            </h4>
            <h4>
              Registration Ends in: <span>4d 13h 41m</span>
            </h4>
            <p>
              <img
                src="https://launch.apeterminal.io/static/media/info_green.16c452f6cf52411c69fe61da54d2dc98.svg"
                alt="iicon"
              />
              No KYC required to opt-in{" "}
            </p>
            <button>
              Participte Now{" "}
              <img
                src="https://launch.apeterminal.io/static/media/forward_icon.1c5e22e2fe28444d6fedddce7ec3b62b.svg"
                alt="icon"
              />
            </button>
          </div>

          <div className="right">
            <video
              autoPlay
              muted
              loop
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <source
                src="https://launchpad-bucket.s3.amazonaws.com/VID_20240410_161509_790+(1).mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="liveand">
        <h1>Live and Upcoming Launches</h1>

        <div className="container">
          <div className="contain">
            <video
              autoPlay
              muted
              loop
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            >
              <source
                src="https://launchpad-bucket.s3.amazonaws.com/VID_20240409_200158_988.mp4"
                type="video/mp4"
              />
            </video>
            <div className="into">
              <div className="info">
                <img
                  src="https://launchpad-bucket.s3.amazonaws.com/Icon+(44).svg"
                  alt="profile"
                />{" "}
                <h4>Catamoto</h4>
              </div>
            </div>
          </div>

          <div className="contain">
            <video
              autoPlay
              muted
              loop
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            >
              <source
                src="https://launchpad-bucket.s3.amazonaws.com/VID_20240408_152330_396+(1).mp4"
                type="video/mp4"
              />
            </video>
            <div className="into">
              <div className="info">
                <img
                  src="https://launchpad-bucket.s3.amazonaws.com/Icon+(44).svg"
                  alt="profile"
                />{" "}
                <h4>Y8U AI</h4>
              </div>
            </div>
          </div>

          <div className="contain">
            <video
              autoPlay
              muted
              loop
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            >
              <source
                src="https://launchpad-bucket.s3.amazonaws.com/VID_20240405_202315_590.mp4"
                type="video/mp4"
              />
            </video>
            <div className="into">
              <div className="info">
                <img
                  src="https://launchpad-bucket.s3.amazonaws.com/Icon+(44).svg"
                  alt="profile"
                />{" "}
                <h4>XCAD</h4>
              </div>
            </div>
          </div>

          <div className="contain">
            <video
              autoPlay
              muted
              loop
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            >
              <source
                src="https://launchpad-bucket.s3.amazonaws.com/VID_20240403_192302_043+(1).mp4"
                type="video/mp4"
              />
            </video>
            <div className="into">
              <div className="info">
                <img
                  src="https://launchpad-bucket.s3.amazonaws.com/Icon+(44).svg"
                  alt="profile"
                />{" "}
                <h4>Next Gem AI</h4>
              </div>
            </div>
          </div>

          <div className="contain">
            <video
              autoPlay
              muted
              loop
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            >
              <source
                src="https://launchpad-bucket.s3.amazonaws.com/VID_20240326_201126_562+(1).mp4"
                type="video/mp4"
              />
            </video>
            <div className="into">
              <div className="info">
                <img
                  src="https://launchpad-bucket.s3.amazonaws.com/Icon+(44).svg"
                  alt="profile"
                />{" "}
                <h4>Sharpe AI</h4>
              </div>
            </div>
          </div>

          <div className="contain">
            <video
              autoPlay
              muted
              loop
              style={{ height: "14em", width: "100%", objectFit: "cover" }}
            >
              <source
                src="https://launchpad-bucket.s3.amazonaws.com/VID_20240309_031317_941+(1).mp4"
                type="video/mp4"
              />
            </video>
            <div className="into">
              <div className="info">
                <img
                  src="https://launchpad-bucket.s3.amazonaws.com/Icon+(44).svg"
                  alt="profile"
                />{" "}
                <h4>Ponder</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
