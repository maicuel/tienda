import React from "react"
import "../styles/Footer.scss";

export default function Footer( {copy}) {
  return (
    <div className="footer">
        {copy}
    </div>
  );
}
