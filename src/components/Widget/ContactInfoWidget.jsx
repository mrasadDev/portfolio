import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
}
