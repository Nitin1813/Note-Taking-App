import React from "react";
const currentYear = new Date();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {currentYear.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
