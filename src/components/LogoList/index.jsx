import React from "react";
import Div from "../Div";
import "./logolist.scss";
import Image from "next/image";

export default function LogoList() {
  const partnerLogos = [
    {
      src: "/clients/bamrec.png",
      alt: "Partner",
    },
    {
      src: "/clients/entrena-pro.png",
      alt: "Partner",
    },
    {
      src: "/clients/home-dash.png",
      alt: "Partner",
    },
    {
      src: "/clients/ic-miid.png",
      alt: "Partner",
    },
    {
      src: "/clients/logo-247.png",
      alt: "Partner",
    },
    {
      src: "/clients/Mailbench_logo.png",
      alt: "Partner",
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo d-flex align-items-center" key={index}>
          <Image
            src={partnerLogo.src}
            alt={partnerLogo.alt}
            width={150}
            height={80}
            className="img-fluid"
          />
        </div>
      ))}
    </Div>
  );
}
