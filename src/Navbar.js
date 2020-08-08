import React from "react";
import Logo from "./assets/beam-logo.png"

export default function Navbar(){
  return(

    <nav className="navbar">

        <div>
          <img src={Logo}></img>
        </div>
        <button>Log in</button>
      </nav>

  )
}