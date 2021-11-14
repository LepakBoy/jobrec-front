import React from "react";

import BrandLogo from "assets/images/brand-logo.png";
import Image from "components/Image";

import "./index.scss";
import Footer from "components/Footer";

export default function SiteInfo(props) {
  return (
    <section className="siteinfo">
      <div className="container">
        <div className="siteinfo__content">
          <Image
            srcImage={BrandLogo}
            altImage="Brand Logo"
            className="siteinfo__content--image"
            imageClass="img-cover"
          />
          <p className="siteinfo__content--text">
            Mari Tingkatkan Sumber Daya Manusia.
          </p>
        </div>

        <Footer />
      </div>
    </section>
  );
}
