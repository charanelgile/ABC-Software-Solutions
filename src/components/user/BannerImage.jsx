import React from "react";

const BannerImage = ({
  bannerPageTitle,
  bannerPageText,
  bannerImage,
  bannerImageAlignment,
}) => {
  return (
    <div
      className="bannerImage bgSizeCover flexColCenter text-light text-center container-fluid"
      style={{
        backgroundImage: bannerImage,
        backgroundPositionY: bannerImageAlignment,
      }}>
      <h3 className="m-0">{bannerPageTitle}</h3>

      <p className="m-0">{bannerPageText}</p>
    </div>
  );
};

export default BannerImage;
