import React from "react";

const date = new Date().getFullYear();


function Footer() {
  return  <footer className="footer">
  <p>@copy {date}</p>  
  </footer>;
}

export default Footer;
