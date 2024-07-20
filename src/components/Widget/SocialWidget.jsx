import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Div from "../Div";
import { websiteInfo } from "@/data/website-info";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href={websiteInfo.linkedIn} className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href={websiteInfo.twitter} className="cs-center">
        <Icon icon="fa6-brands:twitter" />
      </Link>
      <Link href={websiteInfo.github} className="cs-center">
        <Icon icon="fa6-brands:github" />
      </Link>
      <Link href={websiteInfo.facebook} className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
    </Div>
  );
}
