// Library Imports
import React from "react";

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

function BannerImage(props) {
  const { pageTitle, pageText, imageYaxis, imageURL } = props;

  return (
    <div
      className="pageBannerImage bgFullWidthImage flexColCenter txtColorDarkTheme container-fluid"
      style={{
        backgroundImage: imageURL,
        backgroundPositionY: imageYaxis,
      }}>
      <h1>{pageTitle}</h1>
      <p>{pageText}</p>
    </div>
  );
}

export default BannerImage;
