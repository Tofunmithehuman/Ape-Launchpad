import React, { useState } from "react";
import "../Styles/style.css";


function Navigation() {

  const [showResponsiveNav, setShowResponsiveNav] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);

  const toggleResponsiveNav = () => {
    setShowResponsiveNav(!showResponsiveNav);
    setShowHamburger(!showHamburger);
  };


  return (
    <div className="Navigation">
      <header>
        <div className="container">
        <img
          src="https://launch.apeterminal.io/static/media/text_logo.7e00aa1fda3e9d238c6391a17aacce3e.svg"
          alt="Logo"
          className="bigLogo"
        />
        <img src="https://launch.apeterminal.io/static/media/logo.b94c4c8292a475a233eb5b9e895b706b.svg" alt="smalllogo" className="smallLogo" />
        <nav>
          <ul>
            <li>
            <svg width={22} height={22} viewBox="0 0 22 22" fill="#FF7722" xmlns="http://www.w3.org/2000/svg" style={{ height: "20px", width: "20px", fill: "rgb(255, 119, 34)" }}>
            <rect x="5.74976" y="6.94922" width="4.9" height="8.72649"></rect>
            <rect x="11.3503" y="6.94922" width="4.9" height="8.72649"></rect>
            <rect x="6.45044" y="16.4043" width="0.7" height="2.18162"></rect>
            <rect x="12.0497" y="16.4043" width="0.7" height="2.18162"></rect>
            <rect x="7.85059" y="16.4043" width="0.7" height="2.90883"></rect>
            <rect x="13.45" y="16.4043" width="0.7" height="2.90883"></rect>
            <rect x="9.24951" y="16.4043" width="0.7" height="2.18162"></rect>
            <rect x="14.85" y="16.4043" width="0.7" height="2.18162"></rect>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.6498 6.22168C10.6497 4.3376 9.6643 2.69262 8.19976 1.8125C6.73514 2.69266 5.74976 4.33776 5.74976 6.22194C5.74976 6.22566 5.74976 6.22938 5.74977 6.23309V6.22168H10.6498Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2491 6.22168C16.249 4.3376 15.2637 2.69262 13.7991 1.8125C12.3345 2.69266 11.3491 4.33776 11.3491 6.22194C11.3491 6.22721 11.3491 6.23248 11.3491 6.23775V6.22168H16.2491Z"></path>
            <path d="M5.05 14.2621V9.12891L2.25 11.5244V14.9466L5.05 14.2621Z"></path>
            <path d="M16.95 14.2621V9.12891L19.75 11.5244V14.9466L16.95 14.2621Z"></path>
            </svg>
            Launchpad
            </li>

            <li> 
            <svg width="21" height="20" viewBox="0 0 21 20" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ height: "20px", width: "20px", fill: "rgb(244, 253, 171)" }}>
            <path d="M1.75012 17.5063V18.7504H18.625V10.0503L17.2019 8.58008L10.1876 15.8261L6.83293 12.3606L1.75012 17.5063Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.1197 4.28328L10.1876 12.4775L6.82531 9.00413L1.75012 14.1602V10.3987L6.84057 5.22709L10.1876 8.6847L16.284 2.38688L18.1197 4.28328Z"></path>
            <path d="M18.6243 7.23884V1.875H13.4327L18.6243 7.23884Z"></path>
            </svg>
            Transparency
            </li>

            <li>
            <img src="https://launch.apeterminal.io/static/media/info_circle.b500d795eb849952567b8ba47073fbae.svg" alt="connect wallet" />
            Connect Wallet
            </li>
          </ul>
        </nav>

        <div className="small">
            <li> <img src="https://launch.apeterminal.io/static/media/info_circle.b500d795eb849952567b8ba47073fbae.svg" alt="connect wallet" />
            Connect Wallet</li>
            <i className={showHamburger ? "fas fa-bars" : "fas fa-times"} onClick={toggleResponsiveNav}></i>
        </div>

        <div className={showResponsiveNav ? "responsiveNav slideIn" : "responsiveNav"}>
        <ul>
            <li>
            <img src="https://launch.apeterminal.io/static/media/info_circle.b500d795eb849952567b8ba47073fbae.svg" alt="connect wallet" />
            Connect Wallet
            </li>

            <li>
            <svg width={22} height={22} viewBox="0 0 22 22" fill="#FF7722" xmlns="http://www.w3.org/2000/svg" style={{ height: "20px", width: "20px", fill: "rgb(255, 119, 34)" }}>
            <rect x="5.74976" y="6.94922" width="4.9" height="8.72649"></rect>
            <rect x="11.3503" y="6.94922" width="4.9" height="8.72649"></rect>
            <rect x="6.45044" y="16.4043" width="0.7" height="2.18162"></rect>
            <rect x="12.0497" y="16.4043" width="0.7" height="2.18162"></rect>
            <rect x="7.85059" y="16.4043" width="0.7" height="2.90883"></rect>
            <rect x="13.45" y="16.4043" width="0.7" height="2.90883"></rect>
            <rect x="9.24951" y="16.4043" width="0.7" height="2.18162"></rect>
            <rect x="14.85" y="16.4043" width="0.7" height="2.18162"></rect>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.6498 6.22168C10.6497 4.3376 9.6643 2.69262 8.19976 1.8125C6.73514 2.69266 5.74976 4.33776 5.74976 6.22194C5.74976 6.22566 5.74976 6.22938 5.74977 6.23309V6.22168H10.6498Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2491 6.22168C16.249 4.3376 15.2637 2.69262 13.7991 1.8125C12.3345 2.69266 11.3491 4.33776 11.3491 6.22194C11.3491 6.22721 11.3491 6.23248 11.3491 6.23775V6.22168H16.2491Z"></path>
            <path d="M5.05 14.2621V9.12891L2.25 11.5244V14.9466L5.05 14.2621Z"></path>
            <path d="M16.95 14.2621V9.12891L19.75 11.5244V14.9466L16.95 14.2621Z"></path>
            </svg>
            Launchpad
            </li>

            <li> 
            <svg width="21" height="20" viewBox="0 0 21 20" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ height: "20px", width: "20px", fill: "rgb(244, 253, 171)" }}>
            <path d="M1.75012 17.5063V18.7504H18.625V10.0503L17.2019 8.58008L10.1876 15.8261L6.83293 12.3606L1.75012 17.5063Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.1197 4.28328L10.1876 12.4775L6.82531 9.00413L1.75012 14.1602V10.3987L6.84057 5.22709L10.1876 8.6847L16.284 2.38688L18.1197 4.28328Z"></path>
            <path d="M18.6243 7.23884V1.875H13.4327L18.6243 7.23884Z"></path>
            </svg>
            Transparency
            </li>

          </ul>
          <div className="inner">
            <p>Join our community</p>
          </div>

        </div>

        </div>
      </header>
    </div>
  );
}

export default Navigation;
