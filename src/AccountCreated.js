import React from "react";
import "./App.css";
import "./AccountCreated.css";
import Confetti from "./assets/confetti.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AccountCreated() {
  return (
    <div className="page-container">
      <Navbar />

      <div className="info-container">
        <div className="text-section">
          <h1>You’ve created a Beam account</h1>
          <img alt="confetti emoji" src={Confetti}></img>

          <h2>
            If you’re on mobile you can open beam from any browser with the
            link: <a>usebeam.chat</a> or click on the button below.
          </h2>

          <button>Open Beam on mobile</button>

          <p>
            If you’re on desktop we’ve sent you an email with that same link.
            You can open it on mobile.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
