"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Props {
  btnLink: string;
  btnText: string;
  variant: string;
  icon?: string;
}

export default function Button({ btnLink, btnText, variant, icon }: Props) {
  return (
    <Link
      className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
      href={btnLink}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </Link>
  );
}
