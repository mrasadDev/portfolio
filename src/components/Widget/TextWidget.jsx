import React from "react";
import Div from "../Div";
import Image from "next/image";

export default function TextWidget({ logoSrc, logoAlt, text }) {
  return (
    <Div className="cs-text_widget">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={170}
        height={170}
        className="mb-5"
      />
      <div>{text}</div>
    </Div>
  );
}
